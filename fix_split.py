import os

app_js_path = r'c:\Users\SERVER-MADERO\Desktop\Output\cursobell206\app.js'
index_html_path = r'c:\Users\SERVER-MADERO\Desktop\Output\cursobell206\index.html'

with open(app_js_path, 'r', encoding='utf-8') as f:
    app_lines = f.readlines()

# Find where </script> occurs
split_idx = -1
for i, line in enumerate(app_lines):
    if '</script><button id="theme-btn"' in line:
        split_idx = i
        break

if split_idx != -1:
    js_content = "".join(app_lines[:split_idx])
    html_append = "".join(app_lines[split_idx:])
    
    with open(app_js_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
        
    with open(index_html_path, 'r', encoding='utf-8') as f:
        index_content = f.read()
        
    # remove </body></html> from index
    index_content = index_content.replace('</body></html>', '')
    index_content += html_append + '\n</body></html>'
    
    with open(index_html_path, 'w', encoding='utf-8') as f:
        f.write(index_content)
