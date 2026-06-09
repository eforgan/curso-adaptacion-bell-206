import os

def split_html(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find boundaries
    style_start = content.find('<style>')
    style_end = content.find('</style>') + len('</style>')
    
    # We want the first main <script>
    script_start = content.find('<script>', style_end)
    
    # Since there are multiple <script> tags at the end of the file added by external tools/plugins (e.g. from the previous session logs where we saw multiple scripts at end), we need to find the last </script> that belongs to the app. Wait, it's safer to just extract from <script> at line 735 down to the last `</script>` before `</body>`.
    # Let's find the `</body>` tag.
    body_end = content.rfind('</body>')
    # The last script tag end before body_end
    script_end = content.rfind('</script>', 0, body_end) + len('</script>')
    
    # Actually, the user has vanilla JS. The JS code might be large.
    css = content[style_start + len('<style>'):style_end - len('</style>')].strip()
    js = content[script_start + len('<script>'):script_end - len('</script>')].strip()
    
    html_top = content[:style_start] + '<link rel="stylesheet" href="style.css">\n'
    html_middle = content[style_end:script_start] + '<script src="app.js"></script>\n'
    html_bottom = content[script_end:]
    
    new_html = html_top + html_middle + html_bottom
    
    dir_name = os.path.dirname(file_path)
    
    with open(os.path.join(dir_name, 'style.css'), 'w', encoding='utf-8') as f:
        f.write(css)
        
    with open(os.path.join(dir_name, 'app.js'), 'w', encoding='utf-8') as f:
        f.write(js)
        
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_html)

if __name__ == '__main__':
    split_html(r'c:\Users\SERVER-MADERO\Desktop\Output\cursobell206\index.html')
