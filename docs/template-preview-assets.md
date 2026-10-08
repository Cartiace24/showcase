# Template preview assets

Each product's desktop and mobile previews are direct browser captures of its real homepage, stored under `public/templates/<id>/` and referenced by `src/data/templates.ts`.

| Catalog entry | Source project | Local URL used for capture |
| --- | --- | --- |
| Dev Portfolio | `D:\devport` | `http://127.0.0.1:5183/` |
| Artport | `D:\artport` | `http://127.0.0.1:5180/` |
| Art Portfolio V2 (Artportv2) | `D:\artportv2` | `http://127.0.0.1:5181/` |
| Civil Engineering | `D:\eng` | `http://127.0.0.1:5182/` |

Run each source project with its existing setup on the listed URL, then run the capture script from `D:\showcase` with the corresponding output directory. For example, Dev Portfolio is the default capture:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\capture-template-previews.ps1
powershell -ExecutionPolicy Bypass -File .\scripts\capture-template-previews.ps1 -Url 'http://127.0.0.1:5180/' -OutputDirectory 'D:\showcase\public\templates\artport'
powershell -ExecutionPolicy Bypass -File .\scripts\capture-template-previews.ps1 -Url 'http://127.0.0.1:5181/' -OutputDirectory 'D:\showcase\public\templates\artportv2'
powershell -ExecutionPolicy Bypass -File .\scripts\capture-template-previews.ps1 -Url 'http://127.0.0.1:5182/' -OutputDirectory 'D:\showcase\public\templates\civil-engineering'
```

To start the Dev Portfolio project at its capture URL, run `npm run dev -- --host 127.0.0.1 --port 5183` from `D:\devport`.

The script captures desktop and 430px mobile sizes without browser chrome and converts the images to WebP. It uses headless Microsoft Edge and Python with Pillow/WebP support; pass `-BrowserPath` or `-PythonPath` if those runtimes are installed elsewhere. It waits 12 seconds for page content and entrance animations to settle before capturing.

The Dev Portfolio currently contains a placeholder name, example projects, and example contact/social links. Artport contains placeholder copy, sample artwork, and example commission rates. Artportv2 marks its current artwork as demo imagery, not the artist's work. The catalog descriptions keep these limitations visible until the source projects receive final content.
