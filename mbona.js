function mbona_logo(s)
{
    document.write('<Center> <img src="' + s +
                   'images/mbona_logo_transparent.png" alt="mbona_logo" width="400"> </Center>');
}

function mbona_menu(s)
{
    document.write('<Center>[');
    document.write('<a href="' + s + 'index.html">home</a> |');
    document.write('<a href="' + s + 'about/index.html">about</a> |');
    document.write('<a href="' + s + 'operations/index.html">how we operate</a> |');
    document.write('<a href="' + s + 'gallery/index.html">gallery</a> |');
    document.write('<a href="' + s + 'sales/index.html">for sale</a> |');
    document.write('<a href="' + s + 'forms/index.html">forms</a> |');
    document.write('<a href="' + s + 'downloads/index.html">downloads</a> |');
    document.write('<a href="' + s + 'links/index.html">links</a> |');
    document.write('<a href="' + s + 'contact/index.html">contact</a>');
    document.write(']</Center>');
}

function mbona_header(s)
{
    mbona_logo(s);
    mbona_menu(s);
}

function mbona_footer(s)
{
    mbona_menu(s);
    document.write('<hr> <Center> last updated: 2020:10:25 </Center>');
}

