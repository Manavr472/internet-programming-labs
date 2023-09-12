<?php
    $xml = new DOMDocument();
    $xml->load('books.xml');

    $xsl = new DOMDocument();
    $xsl->load('books.xslt');

    $proc = new XSLTProcessor();
    $proc->importStylesheet($xsl);

    echo $proc->transformToXML($xml);
?>