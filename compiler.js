/*
* hrenpack_js 3.1.2
* Copyright (c) 2024-2025, Маг Ильяс DOMA (MagIlyasDOMA)
* Licensed under MIT (https://github.com/MagIlyasDOMA/hrenpack_js/blob/main/LICENSE)
*/

"use strict";
function downloadTextAsFile(filename, text) {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    console.log(url);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}
//# sourceMappingURL=compiler.js.map