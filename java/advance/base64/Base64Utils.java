package com.ericsson.portal.api.util;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;

import org.apache.axis.encoding.Base64;
import org.apache.commons.io.IOUtils;

public class Base64Utils {

	private static final String IMAGE_REGEX = "https?://.+\\.((jpe?g)|(gif)|(png))";
	
	/**
	 * Accepts http(s)://
	 * and 
	 * 
	 * .jp(e)g, .gif, .png, image patterns
	 * 
	 * to others mime types not change will be made to the initial input
	 * 
	 * @param imageAdress represents the URL address to fetch the image.
	 *
	 */
	public static String getBase64Image(String imageAdress) {
		
		String base64Image = "";
		
		if (imageAdress.matches(IMAGE_REGEX)) {
			String base64Pattern = "data:%s;base64,%s";
			InputStream is = null;
			URL url;

			try {

				url = new URL(imageAdress);
				is = url.openStream();

				URLConnection conn = url.openConnection();
				String contentType = conn.getContentType();

				if (contentType.matches("image/.+")) {
					is = conn.getInputStream();
					String encoded = Base64.encode(IOUtils.toByteArray(is));

					base64Image = String.format(base64Pattern, contentType, encoded);
				}

			} catch (IOException e) {
				e.printStackTrace();
				base64Image = "";
			} finally {
				if (is != null) {
					try {
						is.close();
					} catch (IOException e) {
						e.printStackTrace();
					}
				}
			}
		}
		
		if (base64Image.isEmpty())
			return imageAdress;
		else
			return base64Image;
	}
}
