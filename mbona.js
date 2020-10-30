function mbona_logo(s)
{
    document.write('<Center> <img src="' + s +
                   'images/mbona_logo_transparent.png" alt="mbona_logo" width="400"> </Center>');
}

function mbona_menu(s)
{
    document.write('<Center>[');
    document.write('<a href="' + s + 'index.html"> home </a> |');
    document.write('<a href="' + s + 'about/index.html"> about </a> |');
    document.write('<a href="' + s + 'operations/index.html"> how we operate </a> |');
    document.write('<a href="' + s + 'gallery/index.html"> gallery </a> |');
    document.write('<a href="' + s + 'visitors/index.html"> visitors </a> |');
    document.write('<a href="' + s + 'sales/index.html"> for sale </a> |');
    document.write('<a href="' + s + 'forms/index.html"> forms </a> |');
    document.write('<a href="' + s + 'downloads/index.html"> downloads </a> |');
    document.write('<a href="' + s + 'donations/index.html"> donations </a> |');
    document.write('<a href="' + s + 'friends/index.html"> friends </a> |');
    document.write('<a href="' + s + 'contact/index.html"> contact </a>');
    document.write(']</Center>');
}

function mbona_header(s)
{
    mbona_logo(s);
    mbona_menu(s);
}

function mbona_credits()
{
    document.write('<small>');
    document.write('<hr> <Center> maintained by <a href="https://hughmurrell.github.io" target=_blank> Hugh Murrell </a> and hosted for free by <a href="https://github.io" target=_blank> GitHub pages </a> </Center>');
    document.write('<Center> additions/deletions to: <a href="mailto:glenda.mbona@iuncapped.co.za"> glenda.mbona@iuncapped.co.za </a> </Center>');
    document.write('<Center> website last updated: 2020:10:29 </Center> <hr>');
    document.write('</small>');
}

function mbona_footer(s)
{
    mbona_menu(s);
    mbona_credits();
}

function gallery_image(id,desc)
{
    document.write('<div class="responsive">');
    document.write('<div class="gallery">');
    document.write('<a target="_blank" href="images/' + id + '.jpg">');
    document.write('<img src="images/' + id + '-300x200.jpg" alt="' + id + '" width="600" height="400">');
    document.write('</a>');
    document.write('<div class="desc">' + desc + '</div>');
    document.write('</div>');
    document.write('</div>');
}

function gallery_viewer(id)
{
    document.write('<div class="responsive">');
    document.write('<div class="gallery">');
    document.write('<a target="_blank" href="'+ id + '/index.html">');
    document.write('<img src="images/' + id + '-300x200.jpg" alt="' + id + '" width="600" height="400">');
    document.write('</a>');
    document.write('<div class="desc">' + id + '</div>');
    document.write('</div>');
    document.write('</div>');
}

function start_advert(share, portion)
{
    document.write('<div class="row">');
    document.write('<div class="column" >');
      document.write('<a target="_blank" href="images/' + share + '-top.jpg">');
      document.write('<img style="float:center" src="images/' + share + '-top-300x300.jpg" /></a> <br><br>');
      document.write('<a target="_blank" href="images/' + share + '-bottom.jpg">');
      document.write('<img style="float:center" src="images/' + share + '-bottom-300x300.jpg" /></a>');
    document.write('</div>');
    document.write('<div class="column" >');
      document.write('<h2> ' + share + ' (' + portion + ') </h2>');
}

function end_advert(name, phone, email)
{
        document.write('<br><br>');
        document.write('<strong>For more info please contact</strong><br/>');
        document.write('<span>Name :</span> ' + name + '<br/>');
        document.write('<span>Phone :</span> ' + phone + ' <br/>');
        document.write('<span>Email : </span> <a href="mailto:' + email + '">' + email + '</a>');
        document.write('</p>');
      document.write('</div>');
    document.write('</div>');
}

function gallery_instructions(title)
{
    document.write('<h1>' + title + '</h1>')
    document.write('<h3>click on thumbnail to open original in new tab <br>')
    document.write('close this tab when finished viewing</h3>')
}

