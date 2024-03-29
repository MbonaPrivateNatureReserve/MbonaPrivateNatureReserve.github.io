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
    document.write('<a href="' + s + 'operations/index.html"> operations </a> |');
    document.write('<a href="' + s + 'gallery/index.html"> gallery </a> |');
    document.write('<a href="' + s + 'visitors/index.html"> visitors </a> |');
    document.write('<a href="' + s + 'sales/index.html"> for sale </a> |');
    document.write('<a href="' + s + 'forms/index.html"> forms </a> |');
    document.write('<a href="' + s + 'downloads/index.html"> download </a> |');
    document.write('<a href="' + s + 'book/index.html"> book </a> |');
    document.write('<a href="' + s + 'donations/index.html"> donate </a> |');
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
    var LastUpdated = document.lastModified;
    document.write('<small>');
    document.write('<hr> <Center> maintained by <a href="https://hughmurrell.github.io" target=_blank> Hugh Murrell </a> and hosted for free by <a href="https://github.io" target=_blank> GitHub pages </a> </Center>');
    document.write('<Center> additions/deletions to: <a href="mailto:board.mbona@iuncapped.co.za"> board.mbona@iuncapped.co.za </a> </Center>');
    document.write('<Center> website last updated:' + LastUpdated + ' </Center> <hr>');
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

function gallery_video(id,desc)
{
    document.write('<div class="responsive">');
    document.write('<div class="gallery">');
    document.write('<a target="_blank" href="videos/' + id + '.mp4">');
    document.write('<img src="videos/' + id + '-300x200.png" alt="' + id + '" width="600" height="400">');
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
    document.write('<h3>Click on an image to open the original photo in a new tab <br>')
    document.write('Close this tab when finished viewing</h3>')
}

