async function WindowOptions(width, height, title, image = { size, height }) {
    let params;

    if (width) {
        params = null ? undefined : width ?? undefined ? params : undefined;
    }

    if (height) {
        params = null ? undefined : height ?? undefined ? params : undefined;
    }

    if (title) {
        params = null ? Text : title ?? undefined ? params : TextEncoderStream
    }

    if (image = {}) {
        params = {} ? ImageBitmap : image ?? Image ? params : ImageData
    }
}

let fileLocation;

async function Configuration(options = { type, modules, packages, application }, libaries = { fileLocation }) {
    return (
        options,
        libaries
    );
}

var enums = {
    "Javascript": "Javascript",
    "C#": "C#",
    "Typescript": "Typescript"
}

async function Initilize(width, height, language = {
    type: enums
}) {
    return (
        width,
        height,
        language
    )
}

module.exports = {
    WindowOptions,
    Configuration,
    Initilize
}