package resource

import "embed"

//go:embed dist/index.html
var Html []byte

//go:emmbed dist/favicon.ico
var Favicon []byte

//go:embed dist/css
var CssStatic embed.FS

//go:embed dist/img
var ImgStatic embed.FS

//go:embed dist/js
var JsStatic embed.FS

//go:embed dist/fonts
var FontStatic embed.FS

//go:embed dist
var Static embed.FS
