<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Book Information</title>
            </head>
            <body>
                <h1>Book Information</h1>
                <table border="1">
                    <tr>
                        <th>Book ID</th>
                        <th>Book Number</th>
                        <th>Author Name</th>
                        <th>Publisher</th>
                        <th>Price</th>
                        <th>Edition</th>
                    </tr>
                    <xsl:for-each select="library/book">
                        <tr>
                            <td><xsl:value-of select="bookID"/></td>
                            <td><xsl:value-of select="bookNumber"/></td>
                            <td><xsl:value-of select="authorName"/></td>
                            <td><xsl:value-of select="publisher"/></td>
                            <td><xsl:value-of select="price"/></td>
                            <td><xsl:value-of select="edition"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
