<?php

/**
 * @author 
 * @copyright 2007
 */

class LibCurl {
	public $channel;
	
	function __construct() {
		$this->channel = curl_init();
		// you might want the headers for http codes
		curl_setopt( $this->channel, CURLOPT_HEADER, true );
		// you may need to set the http useragent for curl to operate as
		curl_setopt( $this->channel, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
		// you wanna follow stuff like meta and location headers
		curl_setopt( $this->channel, CURLOPT_FOLLOWLOCATION, true );
		// clone IE user agent
		curl_setopt( $this->channel, CURLOPT_USERAGENT, "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)" );
		// you want all the data back to test it for errors
		curl_setopt( $this->channel, CURLOPT_RETURNTRANSFER, true );
		// probably unecessary, but cookies may be needed to
		curl_setopt( $this->channel, CURLOPT_COOKIEJAR, 'cookie.txt');
		// as above
		curl_setopt( $this->channel, CURLOPT_COOKIEFILE, 'cookie.txt');    
	}
	
	function makeRequest( $method, $url, $vars = "" ) {
		// if the $vars are in an array then turn them into a usable string
		if( is_array( $vars ) ):
				$vars = implode( '&', $vars );
		endif;
		
		// setup the url to post / get from / to
		curl_setopt( $this->channel, CURLOPT_URL, $url );
		// the actual post bit
		if ( strtolower( $method ) == 'post' ) :
				curl_setopt( $this->channel, CURLOPT_POST, true );
				curl_setopt( $this->channel, CURLOPT_POSTFIELDS, $vars );
		endif;
		// return data
		$sourcePage = curl_exec( $this->channel );
		curl_close($this->channel);
		
		return $sourcePage;
	}
}

$curl = new LibCurl();
// you should not execute both of these, but either way works
echo $curl->makeRequest( 'post', 'http://yourdomain.com/path/to/php.php', 'message=my message goes here' );
echo $curl->makeRequest( 'post', 'http://yourdomain.com/path/to/php.php', array('message=my message goes here', 'type=text') );
?> 