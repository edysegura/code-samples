<?php 
/*
 * UpImage
 *
 * @author: Edy Segura - edy@segura.pro.br
 * @description: Classe para o upload das fotos do produto
 */

class UpImage {

	private $tamanho;
	private $largura;
	private $altura;
	private $diretorio;

	/*
	 * Contrutor
	 */
	public function UpImage($tamanho   = 106883,
	                        $largura   = 530,
													$altura    = 400,
													$diretorio = "") {
		
		$this->tamanho   = $tamanho;
		$this->largura   = $largura;
		$this->altura    = $altura;
		$this->diretorio = (empty($diretorio)) ? ($_SERVER['DOCUMENT_ROOT'] . "/braview/fotos/") : $diretorio;
	}
	
	
	/*
	 * gera um nome único para o arquivo
	 */
	public function geraNome($sPrefixo = "", $sExtensao) {
    $imageName = $sPrefixo . substr(md5(uniqid(time())), 0, 10) . "." . $sExtensao;
        
    if(file_exists($this->diretorio . $imageName)) {
    	$imageName = $this->geraNome($sPrefixo, $sExtensao);
    }

    return $imageName;
	}

	
	/*
	 * Upload da imagem
	 */
	public function upload($file, $sPrefixo = "") {
		$aErrorMessages = $aDimensoes = array();
		$sExtensao = $sImageName = $sImageDir = "";
		
    if(!eregi("^image\/(pjpeg|jpeg|png|gif|bmp)$", $file["type"])) {
    	$aErrorMessages[] = "Arquivo em formato inválido! A imagem deve ser jpg, jpeg, bmp, gif ou png. Envie outro arquivo";
    }
    else {
			if($file["size"] > $this->tamanho) {
				$aErrorMessages[] = "A imagem deve ser de no máximo " . $this->tamanho . " bytes. Envie outro arquivo";
			}
			
			$aDimensoes = getimagesize($file["tmp_name"]);
			
			if($aDimensoes[0] > $this->largura) {
				$aErrorMessages[] = "Largura da imagem não deve ultrapassar " . $this->largura . " pixels";
			}
	
			if($aDimensoes[1] > $this->altura) {
				$aErrorMessages[] = "Altura da imagem não deve ultrapassar " . $this->altura . " pixels";
			}
    }

    if(!sizeof($aErrorMessages)) {
			preg_match("/\.(gif|bmp|png|jpg|jpeg){1}$/i", $file["name"], $sExtensao);
			
			$sImageName = $this->geraNome($sPrefixo . "_", $sExtensao[1]);
			$sImageDir  = $this->diretorio . $sImageName;
	
			// faz o upload da imagem
			if(move_uploaded_file($file["tmp_name"], $sImageDir)) {
				return array(TRUE, $sImageName, "Foto incluída com sucesso!");
			}
			else {
				$aErrorMessages[] = "Não foi possível realizar o upload.";
			}
    }
		
		return $aErrorMessages;
	}

}
?>