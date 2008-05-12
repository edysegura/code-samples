<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN" doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd" />
<xsl:template match="/">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="pt-br">
<head>
<title>Engenharia Web - Estudo sobre XSLT</title>

<link rel="stylesheet" href="css/stylesheets.css" type="text/css" title="Padrão" />

</head>
<body>

<h1>Engenharia Web</h1>

<table>
	<caption>Alunos do curso de Engenharia Web</caption>
	
	<thead>
		<tr>
			<th>Nome</th>
			<th>Sobrenome</th>
		</tr>
	</thead>
	
	<tbody>
		<xsl:for-each select="lista/alunos">
		<xsl:sort select="nome" />
			<tr>
				<td><xsl:value-of select="nome" /></td>
				<td><xsl:value-of select="sobrenome" /></td>
			</tr>
		</xsl:for-each>
	</tbody>
	
	<!-- fim table -->
</table>

</body>
</html>

</xsl:template>
</xsl:stylesheet>
