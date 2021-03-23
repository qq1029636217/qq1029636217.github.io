function doGet(req,res)
{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<html>');
    res.write('<body>');
    res.write('<form method="post">');
    res.write('username:<input name="username">');
    res.write('password:<input name="password" type="password">');
    res.write('<input type="submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>')
    res.end();
}
exports.doGet=doGet;