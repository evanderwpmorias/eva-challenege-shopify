var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all3) => {
  for (var name in all3)
    __defProp(target, name, { get: all3[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// node_modules/@remix-run/node/dist/fetch.js
var require_fetch = __commonJS({
  "node_modules/@remix-run/node/dist/fetch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var webFetch = require("@remix-run/web-fetch"), webFile = require("@remix-run/web-file"), NodeRequest = class extends webFetch.Request {
      constructor(info, init) {
        super(info, init);
      }
      get headers() {
        return super.headers;
      }
      clone() {
        return super.clone();
      }
    }, NodeResponse = class extends webFetch.Response {
      get headers() {
        return super.headers;
      }
      clone() {
        return super.clone();
      }
    }, fetch = (info, init) => (init = {
      // Disable compression handling so people can return the result of a fetch
      // directly in the loader without messing with the Content-Encoding header.
      compress: !1,
      ...init
    }, webFetch.fetch(info, init));
    Object.defineProperty(exports, "FormData", {
      enumerable: !0,
      get: function() {
        return webFetch.FormData;
      }
    });
    Object.defineProperty(exports, "Headers", {
      enumerable: !0,
      get: function() {
        return webFetch.Headers;
      }
    });
    Object.defineProperty(exports, "Blob", {
      enumerable: !0,
      get: function() {
        return webFile.Blob;
      }
    });
    Object.defineProperty(exports, "File", {
      enumerable: !0,
      get: function() {
        return webFile.File;
      }
    });
    exports.Request = NodeRequest;
    exports.Response = NodeResponse;
    exports.fetch = fetch;
  }
});

// node_modules/@remix-run/node/dist/base64.js
var require_base64 = __commonJS({
  "node_modules/@remix-run/node/dist/base64.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    function atob(a) {
      return Buffer.from(a, "base64").toString("binary");
    }
    function btoa2(b) {
      return Buffer.from(b, "binary").toString("base64");
    }
    exports.atob = atob;
    exports.btoa = btoa2;
  }
});

// node_modules/@remix-run/node/dist/globals.js
var require_globals = __commonJS({
  "node_modules/@remix-run/node/dist/globals.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var webStream = require("@remix-run/web-stream"), abortController = require("abort-controller"), base64 = require_base64(), fetch = require_fetch(), webFile = require("@remix-run/web-file"), webFetch = require("@remix-run/web-fetch");
    function installGlobals() {
      global.atob = base64.atob, global.btoa = base64.btoa, global.Blob = webFile.Blob, global.File = webFile.File, global.Headers = webFetch.Headers, global.Request = fetch.Request, global.Response = fetch.Response, global.fetch = fetch.fetch, global.FormData = webFetch.FormData, global.ReadableStream = webStream.ReadableStream, global.WritableStream = webStream.WritableStream, global.AbortController = global.AbortController || abortController.AbortController;
    }
    exports.installGlobals = installGlobals;
  }
});

// node_modules/@remix-run/node/dist/crypto.js
var require_crypto = __commonJS({
  "node_modules/@remix-run/node/dist/crypto.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cookieSignature = require("cookie-signature");
    function _interopDefaultLegacy(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var cookieSignature__default = /* @__PURE__ */ _interopDefaultLegacy(cookieSignature), sign = async (value, secret) => cookieSignature__default.default.sign(value, secret), unsign = async (signed, secret) => cookieSignature__default.default.unsign(signed, secret);
    exports.sign = sign;
    exports.unsign = unsign;
  }
});

// node_modules/@remix-run/node/dist/implementations.js
var require_implementations = __commonJS({
  "node_modules/@remix-run/node/dist/implementations.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var serverRuntime = require("@remix-run/server-runtime"), crypto = require_crypto(), createCookie = serverRuntime.createCookieFactory({
      sign: crypto.sign,
      unsign: crypto.unsign
    }), createCookieSessionStorage = serverRuntime.createCookieSessionStorageFactory(createCookie), createSessionStorage = serverRuntime.createSessionStorageFactory(createCookie), createMemorySessionStorage = serverRuntime.createMemorySessionStorageFactory(createSessionStorage);
    exports.createCookie = createCookie;
    exports.createCookieSessionStorage = createCookieSessionStorage;
    exports.createMemorySessionStorage = createMemorySessionStorage;
    exports.createSessionStorage = createSessionStorage;
  }
});

// node_modules/@remix-run/node/dist/sessions/fileStorage.js
var require_fileStorage = __commonJS({
  "node_modules/@remix-run/node/dist/sessions/fileStorage.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var crypto = require("crypto"), fs = require("fs"), path = require("path"), implementations = require_implementations();
    function _interopNamespace(e) {
      if (e && e.__esModule)
        return e;
      var n = /* @__PURE__ */ Object.create(null);
      return e && Object.keys(e).forEach(function(k) {
        if (k !== "default") {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: !0,
            get: function() {
              return e[k];
            }
          });
        }
      }), n.default = e, Object.freeze(n);
    }
    var crypto__namespace = /* @__PURE__ */ _interopNamespace(crypto), path__namespace = /* @__PURE__ */ _interopNamespace(path);
    function createFileSessionStorage({
      cookie,
      dir
    }) {
      return implementations.createSessionStorage({
        cookie,
        async createData(data, expires) {
          let content = JSON.stringify({
            data,
            expires
          });
          for (; ; ) {
            let randomBytes = crypto__namespace.randomBytes(8), id = Buffer.from(randomBytes).toString("hex");
            try {
              let file = getFile(dir, id);
              return await fs.promises.mkdir(path__namespace.dirname(file), {
                recursive: !0
              }), await fs.promises.writeFile(file, content, {
                encoding: "utf-8",
                flag: "wx"
              }), id;
            } catch (error) {
              if (error.code !== "EEXIST")
                throw error;
            }
          }
        },
        async readData(id) {
          try {
            let file = getFile(dir, id), content = JSON.parse(await fs.promises.readFile(file, "utf-8")), data = content.data, expires = typeof content.expires == "string" ? new Date(content.expires) : null;
            return !expires || expires > /* @__PURE__ */ new Date() ? data : (expires && await fs.promises.unlink(file), null);
          } catch (error) {
            if (error.code !== "ENOENT")
              throw error;
            return null;
          }
        },
        async updateData(id, data, expires) {
          let content = JSON.stringify({
            data,
            expires
          }), file = getFile(dir, id);
          await fs.promises.mkdir(path__namespace.dirname(file), {
            recursive: !0
          }), await fs.promises.writeFile(file, content, "utf-8");
        },
        async deleteData(id) {
          if (id)
            try {
              await fs.promises.unlink(getFile(dir, id));
            } catch (error) {
              if (error.code !== "ENOENT")
                throw error;
            }
        }
      });
    }
    function getFile(dir, id) {
      return path__namespace.join(dir, id.slice(0, 4), id.slice(4));
    }
    exports.createFileSessionStorage = createFileSessionStorage;
  }
});

// node_modules/@remix-run/node/dist/stream.js
var require_stream = __commonJS({
  "node_modules/@remix-run/node/dist/stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var stream4 = require("stream");
    async function writeReadableStreamToWritable(stream5, writable) {
      let reader = stream5.getReader();
      async function read() {
        let {
          done,
          value
        } = await reader.read();
        if (done) {
          writable.end();
          return;
        }
        writable.write(value);
        let flushable = writable;
        typeof flushable.flush == "function" && flushable.flush(), await read();
      }
      try {
        await read();
      } catch (error) {
        throw writable.destroy(error), error;
      }
    }
    async function writeAsyncIterableToWritable(iterable, writable) {
      try {
        for await (let chunk of iterable)
          writable.write(chunk);
        writable.end();
      } catch (error) {
        throw writable.destroy(error), error;
      }
    }
    async function readableStreamToString(stream5, encoding) {
      let reader = stream5.getReader(), chunks = [];
      async function read() {
        let {
          done,
          value
        } = await reader.read();
        done || (value && chunks.push(value), await read());
      }
      return await read(), Buffer.concat(chunks).toString(encoding);
    }
    var createReadableStreamFromReadable = (source) => {
      let pump = new StreamPump(source);
      return new ReadableStream(pump, pump);
    }, StreamPump = class {
      constructor(stream$1) {
        this.highWaterMark = stream$1.readableHighWaterMark || new stream4.Stream.Readable().readableHighWaterMark, this.accumalatedSize = 0, this.stream = stream$1, this.enqueue = this.enqueue.bind(this), this.error = this.error.bind(this), this.close = this.close.bind(this);
      }
      size(chunk) {
        return (chunk == null ? void 0 : chunk.byteLength) || 0;
      }
      start(controller) {
        this.controller = controller, this.stream.on("data", this.enqueue), this.stream.once("error", this.error), this.stream.once("end", this.close), this.stream.once("close", this.close);
      }
      pull() {
        this.resume();
      }
      cancel(reason) {
        this.stream.destroy && this.stream.destroy(reason), this.stream.off("data", this.enqueue), this.stream.off("error", this.error), this.stream.off("end", this.close), this.stream.off("close", this.close);
      }
      enqueue(chunk) {
        if (this.controller)
          try {
            let bytes = chunk instanceof Uint8Array ? chunk : Buffer.from(chunk), available = (this.controller.desiredSize || 0) - bytes.byteLength;
            this.controller.enqueue(bytes), available <= 0 && this.pause();
          } catch {
            this.controller.error(new Error("Could not create Buffer, chunk must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-like Object")), this.cancel();
          }
      }
      pause() {
        this.stream.pause && this.stream.pause();
      }
      resume() {
        this.stream.readable && this.stream.resume && this.stream.resume();
      }
      close() {
        this.controller && (this.controller.close(), delete this.controller);
      }
      error(error) {
        this.controller && (this.controller.error(error), delete this.controller);
      }
    };
    exports.createReadableStreamFromReadable = createReadableStreamFromReadable;
    exports.readableStreamToString = readableStreamToString;
    exports.writeAsyncIterableToWritable = writeAsyncIterableToWritable;
    exports.writeReadableStreamToWritable = writeReadableStreamToWritable;
  }
});

// node_modules/@remix-run/node/dist/upload/fileUploadHandler.js
var require_fileUploadHandler = __commonJS({
  "node_modules/@remix-run/node/dist/upload/fileUploadHandler.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var crypto = require("crypto"), fs = require("fs"), promises = require("fs/promises"), os = require("os"), path = require("path"), stream4 = require("stream"), util2 = require("util"), serverRuntime = require("@remix-run/server-runtime"), streamSlice = require("stream-slice"), stream$1 = require_stream();
    function _interopNamespace(e) {
      if (e && e.__esModule)
        return e;
      var n = /* @__PURE__ */ Object.create(null);
      return e && Object.keys(e).forEach(function(k) {
        if (k !== "default") {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: !0,
            get: function() {
              return e[k];
            }
          });
        }
      }), n.default = e, Object.freeze(n);
    }
    var streamSlice__namespace = /* @__PURE__ */ _interopNamespace(streamSlice), defaultFilePathResolver = ({
      filename
    }) => {
      let ext = filename ? path.extname(filename) : "";
      return "upload_" + crypto.randomBytes(4).readUInt32LE(0) + ext;
    };
    async function uniqueFile(filepath) {
      let ext = path.extname(filepath), uniqueFilepath = filepath;
      for (let i = 1; await promises.stat(uniqueFilepath).then(() => !0).catch(() => !1); i++)
        uniqueFilepath = (ext ? filepath.slice(0, -ext.length) : filepath) + `-${(/* @__PURE__ */ new Date()).getTime()}${ext}`;
      return uniqueFilepath;
    }
    function createFileUploadHandler({
      directory = os.tmpdir(),
      avoidFileConflicts = !0,
      file = defaultFilePathResolver,
      filter: filter2,
      maxPartSize = 3e6
    } = {}) {
      return async ({
        name,
        filename,
        contentType,
        data
      }) => {
        if (!filename || filter2 && !await filter2({
          name,
          filename,
          contentType
        }))
          return;
        let dir = typeof directory == "string" ? directory : directory({
          name,
          filename,
          contentType
        });
        if (!dir)
          return;
        let filedir = path.resolve(dir), path$1 = typeof file == "string" ? file : file({
          name,
          filename,
          contentType
        });
        if (!path$1)
          return;
        let filepath = path.resolve(filedir, path$1);
        avoidFileConflicts && (filepath = await uniqueFile(filepath)), await promises.mkdir(path.dirname(filepath), {
          recursive: !0
        }).catch(() => {
        });
        let writeFileStream = fs.createWriteStream(filepath), size = 0, deleteFile = !1;
        try {
          for await (let chunk of data) {
            if (size += chunk.byteLength, size > maxPartSize)
              throw deleteFile = !0, new serverRuntime.MaxPartSizeExceededError(name, maxPartSize);
            writeFileStream.write(chunk);
          }
        } finally {
          writeFileStream.end(), await util2.promisify(stream4.finished)(writeFileStream), deleteFile && await promises.rm(filepath).catch(() => {
          });
        }
        return new NodeOnDiskFile(filepath, contentType);
      };
    }
    var NodeOnDiskFile = class {
      lastModified = 0;
      webkitRelativePath = "";
      constructor(filepath, type, slicer) {
        this.filepath = filepath, this.type = type, this.slicer = slicer, this.name = path.basename(filepath);
      }
      get size() {
        let stats = fs.statSync(this.filepath);
        if (this.slicer) {
          let slice = this.slicer.end - this.slicer.start;
          return slice < 0 ? 0 : slice > stats.size ? stats.size : slice;
        }
        return stats.size;
      }
      slice(start, end, type) {
        var _this$slicer;
        typeof start == "number" && start < 0 && (start = this.size + start), typeof end == "number" && end < 0 && (end = this.size + end);
        let startOffset = ((_this$slicer = this.slicer) === null || _this$slicer === void 0 ? void 0 : _this$slicer.start) || 0;
        return start = startOffset + (start || 0), end = startOffset + (end || this.size), new NodeOnDiskFile(this.filepath, typeof type == "string" ? type : this.type, {
          start,
          end
        });
      }
      async arrayBuffer() {
        let stream5 = fs.createReadStream(this.filepath);
        return this.slicer && (stream5 = stream5.pipe(streamSlice__namespace.slice(this.slicer.start, this.slicer.end))), new Promise((resolve, reject) => {
          let buf = [];
          stream5.on("data", (chunk) => buf.push(chunk)), stream5.on("end", () => resolve(Buffer.concat(buf))), stream5.on("error", (err) => reject(err));
        });
      }
      stream() {
        let stream5 = fs.createReadStream(this.filepath);
        return this.slicer && (stream5 = stream5.pipe(streamSlice__namespace.slice(this.slicer.start, this.slicer.end))), stream$1.createReadableStreamFromReadable(stream5);
      }
      async text() {
        return stream$1.readableStreamToString(this.stream());
      }
      get [Symbol.toStringTag]() {
        return "File";
      }
      remove() {
        return promises.unlink(this.filepath);
      }
      getFilePath() {
        return this.filepath;
      }
    };
    exports.NodeOnDiskFile = NodeOnDiskFile;
    exports.createFileUploadHandler = createFileUploadHandler;
  }
});

// node_modules/@remix-run/node/dist/index.js
var require_dist = __commonJS({
  "node_modules/@remix-run/node/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var sourceMapSupport = require("source-map-support"), abortController = require("abort-controller"), fetch = require_fetch(), globals = require_globals(), fileStorage = require_fileStorage(), fileUploadHandler = require_fileUploadHandler(), implementations = require_implementations(), stream4 = require_stream(), serverRuntime = require("@remix-run/server-runtime"), webFetch = require("@remix-run/web-fetch");
    function _interopDefaultLegacy(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var sourceMapSupport__default = /* @__PURE__ */ _interopDefaultLegacy(sourceMapSupport);
    sourceMapSupport__default.default.install();
    Object.defineProperty(exports, "AbortController", {
      enumerable: !0,
      get: function() {
        return abortController.AbortController;
      }
    });
    exports.Request = fetch.Request;
    exports.Response = fetch.Response;
    exports.fetch = fetch.fetch;
    exports.installGlobals = globals.installGlobals;
    exports.createFileSessionStorage = fileStorage.createFileSessionStorage;
    exports.NodeOnDiskFile = fileUploadHandler.NodeOnDiskFile;
    exports.unstable_createFileUploadHandler = fileUploadHandler.createFileUploadHandler;
    exports.createCookie = implementations.createCookie;
    exports.createCookieSessionStorage = implementations.createCookieSessionStorage;
    exports.createMemorySessionStorage = implementations.createMemorySessionStorage;
    exports.createSessionStorage = implementations.createSessionStorage;
    exports.createReadableStreamFromReadable = stream4.createReadableStreamFromReadable;
    exports.readableStreamToString = stream4.readableStreamToString;
    exports.writeAsyncIterableToWritable = stream4.writeAsyncIterableToWritable;
    exports.writeReadableStreamToWritable = stream4.writeReadableStreamToWritable;
    Object.defineProperty(exports, "MaxPartSizeExceededError", {
      enumerable: !0,
      get: function() {
        return serverRuntime.MaxPartSizeExceededError;
      }
    });
    Object.defineProperty(exports, "broadcastDevReady", {
      enumerable: !0,
      get: function() {
        return serverRuntime.broadcastDevReady;
      }
    });
    Object.defineProperty(exports, "createRequestHandler", {
      enumerable: !0,
      get: function() {
        return serverRuntime.createRequestHandler;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: !0,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "defer", {
      enumerable: !0,
      get: function() {
        return serverRuntime.defer;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: !0,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: !0,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: !0,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "logDevReady", {
      enumerable: !0,
      get: function() {
        return serverRuntime.logDevReady;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: !0,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "unstable_composeUploadHandlers", {
      enumerable: !0,
      get: function() {
        return serverRuntime.unstable_composeUploadHandlers;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: !0,
      get: function() {
        return serverRuntime.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: !0,
      get: function() {
        return serverRuntime.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "FormData", {
      enumerable: !0,
      get: function() {
        return webFetch.FormData;
      }
    });
    Object.defineProperty(exports, "Headers", {
      enumerable: !0,
      get: function() {
        return webFetch.Headers;
      }
    });
  }
});

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_exports = {};
__export(assets_manifest_exports, {
  default: () => assets_manifest_default
});
var assets_manifest_default, init_assets_manifest = __esm({
  "server-assets-manifest:@remix-run/dev/assets-manifest"() {
    assets_manifest_default = { entry: { module: "/build/entry.client-MZJO4DWS.js", imports: ["/build/_shared/chunk-7BPNKTGY.js", "/build/_shared/chunk-NLQNPAAV.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-UL644W2C.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-ONLF3OET.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cart": { id: "routes/cart", parentId: "root", path: "cart", index: void 0, caseSensitive: void 0, module: "/build/routes/cart-TPUWBAUD.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cart.update": { id: "routes/cart.update", parentId: "routes/cart", path: "update", index: void 0, caseSensitive: void 0, module: "/build/routes/cart.update-UTNY3YOJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/categories": { id: "routes/categories", parentId: "root", path: "categories", index: void 0, caseSensitive: void 0, module: "/build/routes/categories-RRK7LL2T.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/categories.$categoryId": { id: "routes/categories.$categoryId", parentId: "routes/categories", path: ":categoryId", index: void 0, caseSensitive: void 0, module: "/build/routes/categories.$categoryId-HVI74A6V.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products": { id: "routes/products", parentId: "root", path: "products", index: void 0, caseSensitive: void 0, module: "/build/routes/products-2VXHGADK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products.$productId": { id: "routes/products.$productId", parentId: "routes/products", path: ":productId", index: void 0, caseSensitive: void 0, module: "/build/routes/products.$productId-XCX677SC.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "a54417d1", hmr: void 0, url: "/build/manifest-A54417D1.js" };
  }
});

// node_modules/@remix-run/css-bundle/dist/server.js
var require_server = __commonJS({
  "node_modules/@remix-run/css-bundle/dist/server.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var assetsManifest = (init_assets_manifest(), __toCommonJS(assets_manifest_exports));
    function _interopDefaultLegacy(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var assetsManifest__default = /* @__PURE__ */ _interopDefaultLegacy(assetsManifest), cssBundleHref2 = assetsManifest__default.default.cssBundleHref;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = __toESM(require_dist()), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 47,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 89,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_css_bundle = __toESM(require_server());

// app/style/core.css
var core_default = "/build/_assets/core-BLVHECDL.css";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-JF46ZOQ5.css";

// app/components/header.tsx
var import_react2 = require("react"), import_react3 = require("@remix-run/react");

// app/modules/service/system.ts
var storageLocal = {
  set: (name, value) => window.localStorage.setItem(name, JSON.stringify(value)),
  get: (x) => {
    let value = window.localStorage.getItem(x);
    return JSON.parse(value);
  },
  remove: (x) => window.localStorage.removeItem(x)
};

// app/images/Eva-White.webp
var Eva_White_default = "/build/_assets/Eva-White-QDIY35C7.webp";

// app/images/cart.svg
var cart_default = "/build/_assets/cart-6K3HZ5GN.svg";

// app/components/header.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), Header = () => {
  var _a, _b;
  let [isDrawerOpen, setIsDrawerOpen] = (0, import_react2.useState)(!1), [isCartOpen, setIsCartOpen] = (0, import_react2.useState)(!1), [userCart, setUserCart] = (0, import_react2.useState)({ totalQuantity: 0 }), fetchers = (0, import_react3.useFetchers)(), cartHandler = (0, import_react3.useFetcher)();
  (0, import_react2.useEffect)(() => {
    let cartState = fetchers.find((fetcher) => fetcher.formAction === "/cart");
    cartState && "id" in cartState.data && (storageLocal.set("cart", cartState.data), setUserCart(cartState.data));
    let id = userCart && "id" in userCart ? userCart.id : null, mainVal = storageLocal.get("cart") || {};
    if (!id && mainVal.id) {
      console.log(storageLocal.get("cart"));
      let variants = storageLocal.get("cart");
      setUserCart(variants);
    }
  }, [cartHandler, fetchers, userCart]);
  let toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }, toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "bg-eva-green text-white fixed top-0 w-full z-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container mx-auto flex items-center justify-between py-4 px-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "button",
          {
            className: "lg:hidden mr-4 focus:outline-none",
            onClick: toggleDrawer,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                className: "h-6 w-6",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75zm0 5.5A.75.75 0 0 1 2.75 9h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75zm0 5.5A.75.75 0 0 1 2.75 14h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75z"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/header.tsx",
                    lineNumber: 59,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/header.tsx",
                lineNumber: 53,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/header.tsx",
            lineNumber: 49,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "md:mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: Eva_White_default, alt: "Eva logo", className: " h-9 py-2" }, void 0, !1, {
          fileName: "app/components/header.tsx",
          lineNumber: 66,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/header.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/header.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/header.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1 px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "hidden lg:flex gap-2 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/categories/shop-all", className: "hover:text-gray-400", children: "Shop All" }, void 0, !1, {
          fileName: "app/components/header.tsx",
          lineNumber: 72,
          columnNumber: 22
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/header.tsx",
        lineNumber: 72,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "button",
        {
          className: "relative focus:outline-none",
          onClick: toggleCart,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: cart_default, className: " h-6", alt: "" }, void 0, !1, {
              fileName: "app/components/header.tsx",
              lineNumber: 81,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs", children: userCart == null ? void 0 : userCart.totalQuantity }, void 0, !1, {
              fileName: "app/components/header.tsx",
              lineNumber: 83,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/header.tsx",
          lineNumber: 77,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/header.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    isDrawerOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-screen fixed h-full top-0 left-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { onClick: toggleDrawer, className: " bg-black opacity-30 w-full h-full" }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 95,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "lg:hidden  shadow-md bg-white text-black h-screen w-64 fixed top-0 left-0 z-50 px-4 py-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/categories/shop-all", className: "hover:text-gray-400", children: "Shop All" }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 99,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 98,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 97,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 96,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/header.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this),
    isCartOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-screen fixed h-full top-0 left-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { onClick: toggleCart, className: " bg-black opacity-30 w-full h-full" }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 109,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "shadow-md bg-white text-black h-full flex flex-col  w-full max-w-lg fixed top-0 right-0 z-50 px-4 py-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex border-b p-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-xl mb-4 flex-1", children: [
            "Cart (",
            userCart == null ? void 0 : userCart.totalQuantity,
            ")"
          ] }, void 0, !0, {
            fileName: "app/components/header.tsx",
            lineNumber: 112,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: toggleCart, children: " X " }, void 0, !1, {
            fileName: "app/components/header.tsx",
            lineNumber: 114,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/header.tsx",
            lineNumber: 113,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/header.tsx",
          lineNumber: 111,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "flex-1", children: userCart == null ? void 0 : userCart.lines.edges.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex items-center py-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "img",
            {
              src: item.node.merchandise.image.url,
              alt: "Product",
              className: "h-20 w-20 object-cover rounded"
            },
            void 0,
            !1,
            {
              fileName: "app/components/header.tsx",
              lineNumber: 124,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-gray-200 text-evagreen text-xl fornt medium", children: item.node.merchandise.title }, void 0, !1, {
              fileName: "app/components/header.tsx",
              lineNumber: 130,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-400", children: [
              item.node.merchandise.priceV2.amount,
              " ",
              item.node.merchandise.priceV2.currencyCode
            ] }, void 0, !0, {
              fileName: "app/components/header.tsx",
              lineNumber: 131,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/header.tsx",
            lineNumber: 129,
            columnNumber: 19
          }, this)
        ] }, item.node.id, !0, {
          fileName: "app/components/header.tsx",
          lineNumber: 123,
          columnNumber: 19
        }, this)) }, void 0, !1, {
          fileName: "app/components/header.tsx",
          lineNumber: 121,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-4 my-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-3xl font-thin", children: "Subtotal" }, void 0, !1, {
            fileName: "app/components/header.tsx",
            lineNumber: 138,
            columnNumber: 59
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("hr", { className: " border-black flex-1 " }, void 0, !1, {
            fileName: "app/components/header.tsx",
            lineNumber: 138,
            columnNumber: 109
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " md:text-xl", children: [
            (_a = userCart == null ? void 0 : userCart.cost) == null ? void 0 : _a.subtotalAmount.amount,
            " ",
            (_b = userCart == null ? void 0 : userCart.cost) == null ? void 0 : _b.subtotalAmount.currencyCode
          ] }, void 0, !0, {
            fileName: "app/components/header.tsx",
            lineNumber: 138,
            columnNumber: 148
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/header.tsx",
          lineNumber: 138,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: userCart == null ? void 0 : userCart.checkoutUrl, className: " text-white text-center font-bold py-2 px-4 block bg-eva-green w-full", children: "Checkout" }, void 0, !1, {
          fileName: "app/components/header.tsx",
          lineNumber: 139,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/header.tsx",
        lineNumber: 110,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/header.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/header.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}, header_default = Header;

// app/images/green-logo.svg
var green_logo_default = "/build/_assets/green-logo-K47HCZTF.svg";

// app/images/youtube.svg
var youtube_default = "/build/_assets/youtube-6GOBFHWI.svg";

// app/images/facebook.svg
var facebook_default = "/build/_assets/facebook-G6OFNL6B.svg";

// app/images/instagram.svg
var instagram_default = "/build/_assets/instagram-M3DSJMRQ.svg";

// app/components/footer.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: " bg-slate-700 text-white p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "lg:hidden py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: Eva_White_default, className: "h-8", alt: "" }, void 0, !1, {
        fileName: "app/components/footer.tsx",
        lineNumber: 14,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/footer.tsx",
        lineNumber: 13,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-end justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "signup", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("b", { children: "We\u2019ve got secrets\u2026" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 18,
            columnNumber: 44
          }, this) }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 18,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: " text-sm", children: "We'll drop prices, give insider cosy knowledge and never send spam (promise)." }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 19,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/footer.tsx",
          lineNumber: 17,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "flex gap-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "HorizontalList__Item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://www.facebook.com/evahomeofficial/", className: "Link Link--primary", target: "_blank", rel: "noopener", "aria-label": "Facebook", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: facebook_default, className: " h-5", alt: "" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 26,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 25,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 24,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "HorizontalList__Item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://instagram.com/eva.home", className: "Link Link--primary", target: "_blank", rel: "noopener", "aria-label": "Instagram", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: instagram_default, className: "h-5", alt: "" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 33,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 32,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 31,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "HorizontalList__Item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://www.youtube.com/channel/UCESSp-9_XRezy-EJbjWZf0Q", className: "Link Link--primary", target: "_blank", rel: "noopener", "aria-label": "YouTube", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: youtube_default, className: "h-5", alt: "" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 40,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 39,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 38,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/footer.tsx",
          lineNumber: 23,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 21,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/footer.tsx",
        lineNumber: 16,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/footer.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "Footer__Aside p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "footer-green-logo", src: green_logo_default }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 51,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 52,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/footer.tsx",
        lineNumber: 50,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "md:flex text-xs justify-between gap-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "f-left w-full md:w-2/3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Eva acknowledges the Traditional Owners of the land where we work and live. We pay our respects to Elders past, present and emerging. We celebrate the stories, culture and traditions of Aboriginal and Torres Strait Islander Elders of all communities who also work and live on this land." }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 57,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 58,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/footer.tsx",
          lineNumber: 55,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "f-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex  flex-col gap-3 md:flex-row md:gap-6 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://eva.com.au", className: "Footer__StoreName  u-h7 Link Link--secondary", children: "\xA92023  Eva" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 62,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/pages/terms-of-service", className: "Footer__StoreName u-h7 Link Link--secondary", children: "Terms and Conditions" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 63,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/pages/privacy-policy", className: "Footer__StoreName u-h7 Link Link--secondary", children: "Privacy Policy" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 64,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/pages/sitemap", className: "Footer__StoreName u-h7 Link Link--secondary", children: "Sitemap" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 65,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/footer.tsx",
          lineNumber: 61,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 60,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/footer.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/footer.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/footer.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

// app/root.tsx
var import_react4 = require("@remix-run/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), links = () => [
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : [],
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: core_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.gstatic.com" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("link", { href: "https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap", rel: "stylesheet" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(header_default, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: " mt-16 min-h-screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Index, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/categories.$categoryId.tsx
var categories_categoryId_exports = {};
__export(categories_categoryId_exports, {
  default: () => Index2,
  loader: () => loader,
  meta: () => meta
});

// app/modules/shopify/queries.ts
var queryProducts = `
  query GetProducts {
    products(sortKey: TITLE, first: 100) {
      edges {
        node {
          id
          handle
          description
          title
          productType
          totalInventory
          variants(first: 5) {
            edges {
              node {
                id
                title
                quantityAvailable
                price: priceV2 {
                  amount
                  currencyCode
                }
              }
            }
          }
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            edges {
              node {
                src
                altText
              }
            }
          }
        }
      }
    }
  }
`;
var queryProduct = `
  query GetProduct($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      handle
      description
      descriptionHtml
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      metafield(namespace: "custom", key: "product_slides") {
        value
        reference {
          ... on MediaImage {
            id
          }
        }
      }
      images(first: 10) {
        edges {
          node {
            id
            altText
            originalSrc
          }
        }
      }
      variants(first: 10) {
        edges {
          node {
            availableForSale
            id
            title
            priceV2 {
              amount
              currencyCode
            }

            color: metafield(key: "item_color", namespace: "custom") {
              value
            }

          }
        }
      }

      hero: metafield(key: "product_slides", namespace: "custom") {
        references(first: 10) {
          edges {
            node {
              ... on MediaImage {
                id
                image {
                  height
                  id
                  url
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`, queryCategory = `
  query GetCategory($handle: String!) {
    collection(handle: $handle) {
      id
      title
      handle
      description
      descriptionHtml
      image {
        id
        altText
        originalSrc
      }
      products(first: 20) {
        edges {
          node {
            id
            title
            handle
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            featuredImage {
              height
              url
              width
            }
          }
        }
      }
    }
  }
`, queryPage = `
  query GetPage($handle: String!) {
    page(handle: $handle) {
      body
      bodySummary
      handle
      id
      onlineStoreUrl
      seo {
        description
        title
      }
    }
  }
`;

// app/modules/shopify/mutations.ts
var createShopifyCheckout = `
mutation createCart($variantId: ID!, $quantity: Int!) {
  cartCreate(
    input: {lines: {quantity: $quantity, merchandiseId: $variantId}}
  ) {
    cart {
      checkoutUrl
      
      totalQuantity
      lines(first: 100) {
        edges {
          node {
            quantity
            merchandise {
              ... on ProductVariant {
                id
                title
                image {
                  url
                  height
                  width
                }
                priceV2 {
                  amount
                  currencyCode
                }
                product {
                  id
                }
                compareAtPriceV2 {
                  amount
                  currencyCode
                }
              }
            }
            id
            cost {
              totalAmount {
                amount
                currencyCode
              }
              subtotalAmount {
                amount
                currencyCode
              }
              compareAtAmountPerQuantity {
                amount
                currencyCode
              }
              amountPerQuantity {
                amount
                currencyCode
              }
            }
          }
        }
      }
      id
      cost {
        totalAmount {
          amount
          currencyCode
        }
        subtotalAmount {
          amount
          currencyCode
        }
      }
    }
  }
}`, addToCartMutation = `
  mutation {
  cartCreate(
    input: {lines: {quantity: 10, merchandiseId: "gid://shopify/ProductVariant/45199746302239"}}
  ) {
    cart {
      checkoutUrl
      totalQuantity
      lines(first: 100) {
        edges {
          node {
            quantity
            merchandise {
              ... on ProductVariant {
                id
                image {
                  url
                  height
                  width
                }
                priceV2 {
                  amount
                  currencyCode
                }
                product {
                  id
                }
                compareAtPriceV2 {
                  amount
                  currencyCode
                }
              }
            }
            id
            cost {
              totalAmount {
                amount
                currencyCode
              }
              subtotalAmount {
                amount
                currencyCode
              }
              compareAtAmountPerQuantity {
                amount
                currencyCode
              }
              amountPerQuantity {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
}
`, updateCartQuantityMutation = `
  mutation UpdateCartQuantity($lineItemId: ID!, $quantity: Int!, $checkoutId: ID!) {
    checkoutLineItemsUpdate(
      checkoutId: $checkoutId,
      lineItems: [{ id: $lineItemId, quantity: $quantity }]
    ) {
      checkout {
        id
        webUrl
        lineItems(first: 10) {
          edges {
            node {
              id
              title
              quantity
              variant {
                id
                title
                priceV2 {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`, removeCartItemMutation = `
  mutation RemoveCartItem($lineItemId: ID!) {
    checkoutLineItemsRemove(lineItemIds: [$lineItemId]) {
      checkout {
        id
        webUrl
        lineItems(first: 10) {
          edges {
            node {
              id
              title
              quantity
              variant {
                id
                title
                priceV2 {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`;

// node_modules/axios/lib/helpers/bind.js
function bind(fn, thisArg) {
  return function() {
    return fn.apply(thisArg, arguments);
  };
}

// node_modules/axios/lib/utils.js
var { toString } = Object.prototype, { getPrototypeOf } = Object, kindOf = ((cache) => (thing) => {
  let str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), kindOfTest = (type) => (type = type.toLowerCase(), (thing) => kindOf(thing) === type), typeOfTest = (type) => (thing) => typeof thing === type, { isArray } = Array, isUndefined = typeOfTest("undefined");
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
var isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? result = ArrayBuffer.isView(val) : result = val && val.buffer && isArrayBuffer(val.buffer), result;
}
var isString = typeOfTest("string"), isFunction = typeOfTest("function"), isNumber = typeOfTest("number"), isObject = (thing) => thing !== null && typeof thing == "object", isBoolean = (thing) => thing === !0 || thing === !1, isPlainObject = (val) => {
  if (kindOf(val) !== "object")
    return !1;
  let prototype3 = getPrototypeOf(val);
  return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
}, isDate = kindOfTest("Date"), isFile = kindOfTest("File"), isBlob = kindOfTest("Blob"), isFileList = kindOfTest("FileList"), isStream = (val) => isObject(val) && isFunction(val.pipe), isFormData = (thing) => {
  let kind;
  return thing && (typeof FormData == "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
  kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
}, isURLSearchParams = kindOfTest("URLSearchParams"), trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(obj, fn, { allOwnKeys = !1 } = {}) {
  if (obj === null || typeof obj > "u")
    return;
  let i, l;
  if (typeof obj != "object" && (obj = [obj]), isArray(obj))
    for (i = 0, l = obj.length; i < l; i++)
      fn.call(null, obj[i], i, obj);
  else {
    let keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj), len = keys.length, key;
    for (i = 0; i < len; i++)
      key = keys[i], fn.call(null, obj[key], key, obj);
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  let keys = Object.keys(obj), i = keys.length, _key;
  for (; i-- > 0; )
    if (_key = keys[i], key === _key.toLowerCase())
      return _key;
  return null;
}
var _global = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge() {
  let { caseless } = isContextDefined(this) && this || {}, result = {}, assignValue = (val, key) => {
    let targetKey = caseless && findKey(result, key) || key;
    isPlainObject(result[targetKey]) && isPlainObject(val) ? result[targetKey] = merge(result[targetKey], val) : isPlainObject(val) ? result[targetKey] = merge({}, val) : isArray(val) ? result[targetKey] = val.slice() : result[targetKey] = val;
  };
  for (let i = 0, l = arguments.length; i < l; i++)
    arguments[i] && forEach(arguments[i], assignValue);
  return result;
}
var extend = (a, b, thisArg, { allOwnKeys } = {}) => (forEach(b, (val, key) => {
  thisArg && isFunction(val) ? a[key] = bind(val, thisArg) : a[key] = val;
}, { allOwnKeys }), a), stripBOM = (content) => (content.charCodeAt(0) === 65279 && (content = content.slice(1)), content), inherits = (constructor, superConstructor, props, descriptors2) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors2), constructor.prototype.constructor = constructor, Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  }), props && Object.assign(constructor.prototype, props);
}, toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
  let props, i, prop, merged = {};
  if (destObj = destObj || {}, sourceObj == null)
    return destObj;
  do {
    for (props = Object.getOwnPropertyNames(sourceObj), i = props.length; i-- > 0; )
      prop = props[i], (!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop] && (destObj[prop] = sourceObj[prop], merged[prop] = !0);
    sourceObj = filter2 !== !1 && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
}, endsWith = (str, searchString, position) => {
  str = String(str), (position === void 0 || position > str.length) && (position = str.length), position -= searchString.length;
  let lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}, toArray = (thing) => {
  if (!thing)
    return null;
  if (isArray(thing))
    return thing;
  let i = thing.length;
  if (!isNumber(i))
    return null;
  let arr = new Array(i);
  for (; i-- > 0; )
    arr[i] = thing[i];
  return arr;
}, isTypedArray = ((TypedArray) => (thing) => TypedArray && thing instanceof TypedArray)(typeof Uint8Array < "u" && getPrototypeOf(Uint8Array)), forEachEntry = (obj, fn) => {
  let iterator = (obj && obj[Symbol.iterator]).call(obj), result;
  for (; (result = iterator.next()) && !result.done; ) {
    let pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
}, matchAll = (regExp, str) => {
  let matches, arr = [];
  for (; (matches = regExp.exec(str)) !== null; )
    arr.push(matches);
  return arr;
}, isHTMLForm = kindOfTest("HTMLFormElement"), toCamelCase = (str) => str.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(m, p1, p2) {
    return p1.toUpperCase() + p2;
  }
), hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype), isRegExp = kindOfTest("RegExp"), reduceDescriptors = (obj, reducer) => {
  let descriptors2 = Object.getOwnPropertyDescriptors(obj), reducedDescriptors = {};
  forEach(descriptors2, (descriptor, name) => {
    reducer(descriptor, name, obj) !== !1 && (reducedDescriptors[name] = descriptor);
  }), Object.defineProperties(obj, reducedDescriptors);
}, freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1)
      return !1;
    let value = obj[name];
    if (isFunction(value)) {
      if (descriptor.enumerable = !1, "writable" in descriptor) {
        descriptor.writable = !1;
        return;
      }
      descriptor.set || (descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      });
    }
  });
}, toObjectSet = (arrayOrString, delimiter) => {
  let obj = {}, define = (arr) => {
    arr.forEach((value) => {
      obj[value] = !0;
    });
  };
  return isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter)), obj;
}, noop = () => {
}, toFiniteNumber = (value, defaultValue) => (value = +value, Number.isFinite(value) ? value : defaultValue), ALPHA = "abcdefghijklmnopqrstuvwxyz", DIGIT = "0123456789", ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
}, generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = "", { length } = alphabet;
  for (; size--; )
    str += alphabet[Math.random() * length | 0];
  return str;
};
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
var toJSONObject = (obj) => {
  let stack = new Array(10), visit = (source, i) => {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0)
        return;
      if (!("toJSON" in source)) {
        stack[i] = source;
        let target = isArray(source) ? [] : {};
        return forEach(source, (value, key) => {
          let reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        }), stack[i] = void 0, target;
      }
    }
    return source;
  };
  return visit(obj, 0);
}, isAsyncFn = kindOfTest("AsyncFunction"), isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch), utils_default = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
};

// node_modules/axios/lib/core/AxiosError.js
function AxiosError(message, code, config, request, response) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = message, this.name = "AxiosError", code && (this.code = code), config && (this.config = config), request && (this.request = request), response && (this.response = response);
}
utils_default.inherits(AxiosError, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils_default.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var prototype = AxiosError.prototype, descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((code) => {
  descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, "isAxiosError", { value: !0 });
AxiosError.from = (error, code, config, request, response, customProps) => {
  let axiosError = Object.create(prototype);
  return utils_default.toFlatObject(error, axiosError, function(obj) {
    return obj !== Error.prototype;
  }, (prop) => prop !== "isAxiosError"), AxiosError.call(axiosError, error.message, code, config, request, response), axiosError.cause = error, axiosError.name = error.name, customProps && Object.assign(axiosError, customProps), axiosError;
};
var AxiosError_default = AxiosError;

// node_modules/axios/lib/platform/node/classes/FormData.js
var import_form_data = __toESM(require("form-data"), 1), FormData_default = import_form_data.default;

// node_modules/axios/lib/helpers/toFormData.js
function isVisitable(thing) {
  return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
}
function removeBrackets(key) {
  return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
  return path ? path.concat(key).map(function(token, i) {
    return token = removeBrackets(token), !dots && i ? "[" + token + "]" : token;
  }).join(dots ? "." : "") : key;
}
function isFlatArray(arr) {
  return utils_default.isArray(arr) && !arr.some(isVisitable);
}
var predicates = utils_default.toFlatObject(utils_default, {}, null, function(prop) {
  return /^is[A-Z]/.test(prop);
});
function toFormData(obj, formData, options) {
  if (!utils_default.isObject(obj))
    throw new TypeError("target must be an object");
  formData = formData || new (FormData_default || FormData)(), options = utils_default.toFlatObject(options, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(option, source) {
    return !utils_default.isUndefined(source[option]);
  });
  let metaTokens = options.metaTokens, visitor = options.visitor || defaultVisitor, dots = options.dots, indexes = options.indexes, useBlob = (options.Blob || typeof Blob < "u" && Blob) && utils_default.isSpecCompliantForm(formData);
  if (!utils_default.isFunction(visitor))
    throw new TypeError("visitor must be a function");
  function convertValue(value) {
    if (value === null)
      return "";
    if (utils_default.isDate(value))
      return value.toISOString();
    if (!useBlob && utils_default.isBlob(value))
      throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
    return utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value) ? useBlob && typeof Blob == "function" ? new Blob([value]) : Buffer.from(value) : value;
  }
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value == "object") {
      if (utils_default.endsWith(key, "{}"))
        key = metaTokens ? key : key.slice(0, -2), value = JSON.stringify(value);
      else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value)))
        return key = removeBrackets(key), arr.forEach(function(el, index) {
          !(utils_default.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === !0 ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
            convertValue(el)
          );
        }), !1;
    }
    return isVisitable(value) ? !0 : (formData.append(renderKey(path, key, dots), convertValue(value)), !1);
  }
  let stack = [], exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (!utils_default.isUndefined(value)) {
      if (stack.indexOf(value) !== -1)
        throw Error("Circular reference detected in " + path.join("."));
      stack.push(value), utils_default.forEach(value, function(el, key) {
        (!(utils_default.isUndefined(el) || el === null) && visitor.call(
          formData,
          el,
          utils_default.isString(key) ? key.trim() : key,
          path,
          exposedHelpers
        )) === !0 && build(el, path ? path.concat(key) : [key]);
      }), stack.pop();
    }
  }
  if (!utils_default.isObject(obj))
    throw new TypeError("data must be an object");
  return build(obj), formData;
}
var toFormData_default = toFormData;

// node_modules/axios/lib/helpers/AxiosURLSearchParams.js
function encode(str) {
  let charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function(match) {
    return charMap[match];
  });
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [], params && toFormData_default(params, this, options);
}
var prototype2 = AxiosURLSearchParams.prototype;
prototype2.append = function(name, value) {
  this._pairs.push([name, value]);
};
prototype2.toString = function(encoder) {
  let _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;
  return this._pairs.map(function(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
var AxiosURLSearchParams_default = AxiosURLSearchParams;

// node_modules/axios/lib/helpers/buildURL.js
function encode2(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url3, params, options) {
  if (!params)
    return url3;
  let _encode = options && options.encode || encode2, serializeFn = options && options.serialize, serializedParams;
  if (serializeFn ? serializedParams = serializeFn(params, options) : serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode), serializedParams) {
    let hashmarkIndex = url3.indexOf("#");
    hashmarkIndex !== -1 && (url3 = url3.slice(0, hashmarkIndex)), url3 += (url3.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url3;
}

// node_modules/axios/lib/core/InterceptorManager.js
var InterceptorManager = class {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    return this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : !1,
      runWhen: options ? options.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    this.handlers[id] && (this.handlers[id] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils_default.forEach(this.handlers, function(h) {
      h !== null && fn(h);
    });
  }
}, InterceptorManager_default = InterceptorManager;

// node_modules/axios/lib/defaults/transitional.js
var transitional_default = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
};

// node_modules/axios/lib/platform/node/classes/URLSearchParams.js
var import_url = __toESM(require("url"), 1), URLSearchParams_default = import_url.default.URLSearchParams;

// node_modules/axios/lib/platform/node/index.js
var node_default = {
  isNode: !0,
  classes: {
    URLSearchParams: URLSearchParams_default,
    FormData: FormData_default,
    Blob: typeof Blob < "u" && Blob || null
  },
  protocols: ["http", "https", "file", "data"]
};

// node_modules/axios/lib/helpers/toURLEncodedForm.js
function toURLEncodedForm(data, options) {
  return toFormData_default(data, new node_default.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      return node_default.isNode && utils_default.isBuffer(value) ? (this.append(key, value.toString("base64")), !1) : helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

// node_modules/axios/lib/helpers/formDataToJSON.js
function parsePropPath(name) {
  return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => match[0] === "[]" ? "" : match[1] || match[0]);
}
function arrayToObject(arr) {
  let obj = {}, keys = Object.keys(arr), i, len = keys.length, key;
  for (i = 0; i < len; i++)
    key = keys[i], obj[key] = arr[key];
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++], isNumericKey = Number.isFinite(+name), isLast = index >= path.length;
    return name = !name && utils_default.isArray(target) ? target.length : name, isLast ? (utils_default.hasOwnProp(target, name) ? target[name] = [target[name], value] : target[name] = value, !isNumericKey) : ((!target[name] || !utils_default.isObject(target[name])) && (target[name] = []), buildPath(path, value, target[name], index) && utils_default.isArray(target[name]) && (target[name] = arrayToObject(target[name])), !isNumericKey);
  }
  if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
    let obj = {};
    return utils_default.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    }), obj;
  }
  return null;
}
var formDataToJSON_default = formDataToJSON;

// node_modules/axios/lib/defaults/index.js
var DEFAULT_CONTENT_TYPE = {
  "Content-Type": void 0
};
function stringifySafely(rawValue, parser, encoder) {
  if (utils_default.isString(rawValue))
    try {
      return (parser || JSON.parse)(rawValue), utils_default.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError")
        throw e;
    }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
  transitional: transitional_default,
  adapter: ["xhr", "http"],
  transformRequest: [function(data, headers) {
    let contentType = headers.getContentType() || "", hasJSONContentType = contentType.indexOf("application/json") > -1, isObjectPayload = utils_default.isObject(data);
    if (isObjectPayload && utils_default.isHTMLForm(data) && (data = new FormData(data)), utils_default.isFormData(data))
      return hasJSONContentType && hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
    if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data))
      return data;
    if (utils_default.isArrayBufferView(data))
      return data.buffer;
    if (utils_default.isURLSearchParams(data))
      return headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), data.toString();
    let isFileList2;
    if (isObjectPayload) {
      if (contentType.indexOf("application/x-www-form-urlencoded") > -1)
        return toURLEncodedForm(data, this.formSerializer).toString();
      if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
        let _FormData = this.env && this.env.FormData;
        return toFormData_default(
          isFileList2 ? { "files[]": data } : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }
    return isObjectPayload || hasJSONContentType ? (headers.setContentType("application/json", !1), stringifySafely(data)) : data;
  }],
  transformResponse: [function(data) {
    let transitional2 = this.transitional || defaults.transitional, forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing, JSONRequested = this.responseType === "json";
    if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      let strictJSONParsing = !(transitional2 && transitional2.silentJSONParsing) && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing)
          throw e.name === "SyntaxError" ? AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response) : e;
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: node_default.classes.FormData,
    Blob: node_default.classes.Blob
  },
  validateStatus: function(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
utils_default.forEach(["delete", "get", "head"], function(method) {
  defaults.headers[method] = {};
});
utils_default.forEach(["post", "put", "patch"], function(method) {
  defaults.headers[method] = utils_default.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_default = defaults;

// node_modules/axios/lib/helpers/parseHeaders.js
var ignoreDuplicateOf = utils_default.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), parseHeaders_default = (rawHeaders) => {
  let parsed = {}, key, val, i;
  return rawHeaders && rawHeaders.split(`
`).forEach(function(line) {
    i = line.indexOf(":"), key = line.substring(0, i).trim().toLowerCase(), val = line.substring(i + 1).trim(), !(!key || parsed[key] && ignoreDuplicateOf[key]) && (key === "set-cookie" ? parsed[key] ? parsed[key].push(val) : parsed[key] = [val] : parsed[key] = parsed[key] ? parsed[key] + ", " + val : val);
  }), parsed;
};

// node_modules/axios/lib/core/AxiosHeaders.js
var $internals = Symbol("internals");
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  return value === !1 || value == null ? value : utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  let tokens = /* @__PURE__ */ Object.create(null), tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g, match;
  for (; match = tokensRE.exec(str); )
    tokens[match[1]] = match[2];
  return tokens;
}
var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
  if (utils_default.isFunction(filter2))
    return filter2.call(this, value, header);
  if (isHeaderNameFilter && (value = header), !!utils_default.isString(value)) {
    if (utils_default.isString(filter2))
      return value.indexOf(filter2) !== -1;
    if (utils_default.isRegExp(filter2))
      return filter2.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => char.toUpperCase() + str);
}
function buildAccessors(obj, header) {
  let accessorName = utils_default.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: !0
    });
  });
}
var AxiosHeaders = class {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    let self2 = this;
    function setHeader(_value, _header, _rewrite) {
      let lHeader = normalizeHeader(_header);
      if (!lHeader)
        throw new Error("header name must be a non-empty string");
      let key = utils_default.findKey(self2, lHeader);
      (!key || self2[key] === void 0 || _rewrite === !0 || _rewrite === void 0 && self2[key] !== !1) && (self2[key || _header] = normalizeValue(_value));
    }
    let setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    return utils_default.isPlainObject(header) || header instanceof this.constructor ? setHeaders(header, valueOrRewrite) : utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header) ? setHeaders(parseHeaders_default(header), valueOrRewrite) : header != null && setHeader(valueOrRewrite, header, rewrite), this;
  }
  get(header, parser) {
    if (header = normalizeHeader(header), header) {
      let key = utils_default.findKey(this, header);
      if (key) {
        let value = this[key];
        if (!parser)
          return value;
        if (parser === !0)
          return parseTokens(value);
        if (utils_default.isFunction(parser))
          return parser.call(this, value, key);
        if (utils_default.isRegExp(parser))
          return parser.exec(value);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher) {
    if (header = normalizeHeader(header), header) {
      let key = utils_default.findKey(this, header);
      return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return !1;
  }
  delete(header, matcher) {
    let self2 = this, deleted = !1;
    function deleteHeader(_header) {
      if (_header = normalizeHeader(_header), _header) {
        let key = utils_default.findKey(self2, _header);
        key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher)) && (delete self2[key], deleted = !0);
      }
    }
    return utils_default.isArray(header) ? header.forEach(deleteHeader) : deleteHeader(header), deleted;
  }
  clear(matcher) {
    let keys = Object.keys(this), i = keys.length, deleted = !1;
    for (; i--; ) {
      let key = keys[i];
      (!matcher || matchHeaderValue(this, this[key], key, matcher, !0)) && (delete this[key], deleted = !0);
    }
    return deleted;
  }
  normalize(format) {
    let self2 = this, headers = {};
    return utils_default.forEach(this, (value, header) => {
      let key = utils_default.findKey(headers, header);
      if (key) {
        self2[key] = normalizeValue(value), delete self2[header];
        return;
      }
      let normalized = format ? formatHeader(header) : String(header).trim();
      normalized !== header && delete self2[header], self2[normalized] = normalizeValue(value), headers[normalized] = !0;
    }), this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    let obj = /* @__PURE__ */ Object.create(null);
    return utils_default.forEach(this, (value, header) => {
      value != null && value !== !1 && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
    }), obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    let computed = new this(first);
    return targets.forEach((target) => computed.set(target)), computed;
  }
  static accessor(header) {
    let accessors = (this[$internals] = this[$internals] = {
      accessors: {}
    }).accessors, prototype3 = this.prototype;
    function defineAccessor(_header) {
      let lHeader = normalizeHeader(_header);
      accessors[lHeader] || (buildAccessors(prototype3, _header), accessors[lHeader] = !0);
    }
    return utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header), this;
  }
};
AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
utils_default.freezeMethods(AxiosHeaders.prototype);
utils_default.freezeMethods(AxiosHeaders);
var AxiosHeaders_default = AxiosHeaders;

// node_modules/axios/lib/core/transformData.js
function transformData(fns, response) {
  let config = this || defaults_default, context = response || config, headers = AxiosHeaders_default.from(context.headers), data = context.data;
  return utils_default.forEach(fns, function(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
  }), headers.normalize(), data;
}

// node_modules/axios/lib/cancel/isCancel.js
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

// node_modules/axios/lib/cancel/CanceledError.js
function CanceledError(message, config, request) {
  AxiosError_default.call(this, message ?? "canceled", AxiosError_default.ERR_CANCELED, config, request), this.name = "CanceledError";
}
utils_default.inherits(CanceledError, AxiosError_default, {
  __CANCEL__: !0
});
var CanceledError_default = CanceledError;

// node_modules/axios/lib/core/settle.js
function settle(resolve, reject, response) {
  let validateStatus2 = response.config.validateStatus;
  !response.status || !validateStatus2 || validateStatus2(response.status) ? resolve(response) : reject(new AxiosError_default(
    "Request failed with status code " + response.status,
    [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
    response.config,
    response.request,
    response
  ));
}

// node_modules/axios/lib/helpers/isAbsoluteURL.js
function isAbsoluteURL(url3) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url3);
}

// node_modules/axios/lib/helpers/combineURLs.js
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}

// node_modules/axios/lib/core/buildFullPath.js
function buildFullPath(baseURL, requestedURL) {
  return baseURL && !isAbsoluteURL(requestedURL) ? combineURLs(baseURL, requestedURL) : requestedURL;
}

// node_modules/axios/lib/adapters/http.js
var import_proxy_from_env = require("proxy-from-env"), import_http = __toESM(require("http"), 1), import_https = __toESM(require("https"), 1), import_util2 = __toESM(require("util"), 1), import_follow_redirects = __toESM(require("follow-redirects"), 1), import_zlib = __toESM(require("zlib"), 1);

// node_modules/axios/lib/env/data.js
var VERSION = "1.4.0";

// node_modules/axios/lib/helpers/parseProtocol.js
function parseProtocol(url3) {
  let match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url3);
  return match && match[1] || "";
}

// node_modules/axios/lib/helpers/fromDataURI.js
var DATA_URL_PATTERN = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;
function fromDataURI(uri, asBlob, options) {
  let _Blob = options && options.Blob || node_default.classes.Blob, protocol = parseProtocol(uri);
  if (asBlob === void 0 && _Blob && (asBlob = !0), protocol === "data") {
    uri = protocol.length ? uri.slice(protocol.length + 1) : uri;
    let match = DATA_URL_PATTERN.exec(uri);
    if (!match)
      throw new AxiosError_default("Invalid URL", AxiosError_default.ERR_INVALID_URL);
    let mime = match[1], isBase64 = match[2], body = match[3], buffer = Buffer.from(decodeURIComponent(body), isBase64 ? "base64" : "utf8");
    if (asBlob) {
      if (!_Blob)
        throw new AxiosError_default("Blob is not supported", AxiosError_default.ERR_NOT_SUPPORT);
      return new _Blob([buffer], { type: mime });
    }
    return buffer;
  }
  throw new AxiosError_default("Unsupported protocol " + protocol, AxiosError_default.ERR_NOT_SUPPORT);
}

// node_modules/axios/lib/adapters/http.js
var import_stream4 = __toESM(require("stream"), 1);

// node_modules/axios/lib/helpers/AxiosTransformStream.js
var import_stream = __toESM(require("stream"), 1);

// node_modules/axios/lib/helpers/throttle.js
function throttle(fn, freq) {
  let timestamp = 0, threshold = 1e3 / freq, timer = null;
  return function(force, args) {
    let now = Date.now();
    if (force || now - timestamp > threshold)
      return timer && (clearTimeout(timer), timer = null), timestamp = now, fn.apply(null, args);
    timer || (timer = setTimeout(() => (timer = null, timestamp = Date.now(), fn.apply(null, args)), threshold - (now - timestamp)));
  };
}
var throttle_default = throttle;

// node_modules/axios/lib/helpers/speedometer.js
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  let bytes = new Array(samplesCount), timestamps = new Array(samplesCount), head = 0, tail = 0, firstSampleTS;
  return min = min !== void 0 ? min : 1e3, function(chunkLength) {
    let now = Date.now(), startedAt = timestamps[tail];
    firstSampleTS || (firstSampleTS = now), bytes[head] = chunkLength, timestamps[head] = now;
    let i = tail, bytesCount = 0;
    for (; i !== head; )
      bytesCount += bytes[i++], i = i % samplesCount;
    if (head = (head + 1) % samplesCount, head === tail && (tail = (tail + 1) % samplesCount), now - firstSampleTS < min)
      return;
    let passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
  };
}
var speedometer_default = speedometer;

// node_modules/axios/lib/helpers/AxiosTransformStream.js
var kInternals = Symbol("internals"), AxiosTransformStream = class extends import_stream.default.Transform {
  constructor(options) {
    options = utils_default.toFlatObject(options, {
      maxRate: 0,
      chunkSize: 64 * 1024,
      minChunkSize: 100,
      timeWindow: 500,
      ticksRate: 2,
      samplesCount: 15
    }, null, (prop, source) => !utils_default.isUndefined(source[prop])), super({
      readableHighWaterMark: options.chunkSize
    });
    let self2 = this, internals = this[kInternals] = {
      length: options.length,
      timeWindow: options.timeWindow,
      ticksRate: options.ticksRate,
      chunkSize: options.chunkSize,
      maxRate: options.maxRate,
      minChunkSize: options.minChunkSize,
      bytesSeen: 0,
      isCaptured: !1,
      notifiedBytesLoaded: 0,
      ts: Date.now(),
      bytes: 0,
      onReadCallback: null
    }, _speedometer = speedometer_default(internals.ticksRate * options.samplesCount, internals.timeWindow);
    this.on("newListener", (event) => {
      event === "progress" && (internals.isCaptured || (internals.isCaptured = !0));
    });
    let bytesNotified = 0;
    internals.updateProgress = throttle_default(function() {
      let totalBytes = internals.length, bytesTransferred = internals.bytesSeen, progressBytes = bytesTransferred - bytesNotified;
      if (!progressBytes || self2.destroyed)
        return;
      let rate = _speedometer(progressBytes);
      bytesNotified = bytesTransferred, process.nextTick(() => {
        self2.emit("progress", {
          loaded: bytesTransferred,
          total: totalBytes,
          progress: totalBytes ? bytesTransferred / totalBytes : void 0,
          bytes: progressBytes,
          rate: rate || void 0,
          estimated: rate && totalBytes && bytesTransferred <= totalBytes ? (totalBytes - bytesTransferred) / rate : void 0
        });
      });
    }, internals.ticksRate);
    let onFinish = () => {
      internals.updateProgress(!0);
    };
    this.once("end", onFinish), this.once("error", onFinish);
  }
  _read(size) {
    let internals = this[kInternals];
    return internals.onReadCallback && internals.onReadCallback(), super._read(size);
  }
  _transform(chunk, encoding, callback) {
    let self2 = this, internals = this[kInternals], maxRate = internals.maxRate, readableHighWaterMark = this.readableHighWaterMark, timeWindow = internals.timeWindow, divider = 1e3 / timeWindow, bytesThreshold = maxRate / divider, minChunkSize = internals.minChunkSize !== !1 ? Math.max(internals.minChunkSize, bytesThreshold * 0.01) : 0;
    function pushChunk(_chunk, _callback) {
      let bytes = Buffer.byteLength(_chunk);
      internals.bytesSeen += bytes, internals.bytes += bytes, internals.isCaptured && internals.updateProgress(), self2.push(_chunk) ? process.nextTick(_callback) : internals.onReadCallback = () => {
        internals.onReadCallback = null, process.nextTick(_callback);
      };
    }
    let transformChunk = (_chunk, _callback) => {
      let chunkSize = Buffer.byteLength(_chunk), chunkRemainder = null, maxChunkSize = readableHighWaterMark, bytesLeft, passed = 0;
      if (maxRate) {
        let now = Date.now();
        (!internals.ts || (passed = now - internals.ts) >= timeWindow) && (internals.ts = now, bytesLeft = bytesThreshold - internals.bytes, internals.bytes = bytesLeft < 0 ? -bytesLeft : 0, passed = 0), bytesLeft = bytesThreshold - internals.bytes;
      }
      if (maxRate) {
        if (bytesLeft <= 0)
          return setTimeout(() => {
            _callback(null, _chunk);
          }, timeWindow - passed);
        bytesLeft < maxChunkSize && (maxChunkSize = bytesLeft);
      }
      maxChunkSize && chunkSize > maxChunkSize && chunkSize - maxChunkSize > minChunkSize && (chunkRemainder = _chunk.subarray(maxChunkSize), _chunk = _chunk.subarray(0, maxChunkSize)), pushChunk(_chunk, chunkRemainder ? () => {
        process.nextTick(_callback, null, chunkRemainder);
      } : _callback);
    };
    transformChunk(chunk, function transformNextChunk(err, _chunk) {
      if (err)
        return callback(err);
      _chunk ? transformChunk(_chunk, transformNextChunk) : callback(null);
    });
  }
  setLength(length) {
    return this[kInternals].length = +length, this;
  }
}, AxiosTransformStream_default = AxiosTransformStream;

// node_modules/axios/lib/adapters/http.js
var import_events = __toESM(require("events"), 1);

// node_modules/axios/lib/helpers/formDataToStream.js
var import_util = require("util"), import_stream2 = require("stream");

// node_modules/axios/lib/helpers/readBlob.js
var { asyncIterator } = Symbol, readBlob = async function* (blob) {
  blob.stream ? yield* blob.stream() : blob.arrayBuffer ? yield await blob.arrayBuffer() : blob[asyncIterator] ? yield* blob[asyncIterator]() : yield blob;
}, readBlob_default = readBlob;

// node_modules/axios/lib/helpers/formDataToStream.js
var BOUNDARY_ALPHABET = utils_default.ALPHABET.ALPHA_DIGIT + "-_", textEncoder = new import_util.TextEncoder(), CRLF = `\r
`, CRLF_BYTES = textEncoder.encode(CRLF), CRLF_BYTES_COUNT = 2, FormDataPart = class {
  constructor(name, value) {
    let { escapeName } = this.constructor, isStringValue = utils_default.isString(value), headers = `Content-Disposition: form-data; name="${escapeName(name)}"${!isStringValue && value.name ? `; filename="${escapeName(value.name)}"` : ""}${CRLF}`;
    isStringValue ? value = textEncoder.encode(String(value).replace(/\r?\n|\r\n?/g, CRLF)) : headers += `Content-Type: ${value.type || "application/octet-stream"}${CRLF}`, this.headers = textEncoder.encode(headers + CRLF), this.contentLength = isStringValue ? value.byteLength : value.size, this.size = this.headers.byteLength + this.contentLength + CRLF_BYTES_COUNT, this.name = name, this.value = value;
  }
  async *encode() {
    yield this.headers;
    let { value } = this;
    utils_default.isTypedArray(value) ? yield value : yield* readBlob_default(value), yield CRLF_BYTES;
  }
  static escapeName(name) {
    return String(name).replace(/[\r\n"]/g, (match) => ({
      "\r": "%0D",
      "\n": "%0A",
      '"': "%22"
    })[match]);
  }
}, formDataToStream = (form, headersHandler, options) => {
  let {
    tag = "form-data-boundary",
    size = 25,
    boundary = tag + "-" + utils_default.generateString(size, BOUNDARY_ALPHABET)
  } = options || {};
  if (!utils_default.isFormData(form))
    throw TypeError("FormData instance required");
  if (boundary.length < 1 || boundary.length > 70)
    throw Error("boundary must be 10-70 characters long");
  let boundaryBytes = textEncoder.encode("--" + boundary + CRLF), footerBytes = textEncoder.encode("--" + boundary + "--" + CRLF + CRLF), contentLength = footerBytes.byteLength, parts = Array.from(form.entries()).map(([name, value]) => {
    let part = new FormDataPart(name, value);
    return contentLength += part.size, part;
  });
  contentLength += boundaryBytes.byteLength * parts.length, contentLength = utils_default.toFiniteNumber(contentLength);
  let computedHeaders = {
    "Content-Type": `multipart/form-data; boundary=${boundary}`
  };
  return Number.isFinite(contentLength) && (computedHeaders["Content-Length"] = contentLength), headersHandler && headersHandler(computedHeaders), import_stream2.Readable.from(async function* () {
    for (let part of parts)
      yield boundaryBytes, yield* part.encode();
    yield footerBytes;
  }());
}, formDataToStream_default = formDataToStream;

// node_modules/axios/lib/helpers/ZlibHeaderTransformStream.js
var import_stream3 = __toESM(require("stream"), 1), ZlibHeaderTransformStream = class extends import_stream3.default.Transform {
  __transform(chunk, encoding, callback) {
    this.push(chunk), callback();
  }
  _transform(chunk, encoding, callback) {
    if (chunk.length !== 0 && (this._transform = this.__transform, chunk[0] !== 120)) {
      let header = Buffer.alloc(2);
      header[0] = 120, header[1] = 156, this.push(header, encoding);
    }
    this.__transform(chunk, encoding, callback);
  }
}, ZlibHeaderTransformStream_default = ZlibHeaderTransformStream;

// node_modules/axios/lib/helpers/callbackify.js
var callbackify = (fn, reducer) => utils_default.isAsyncFn(fn) ? function(...args) {
  let cb = args.pop();
  fn.apply(this, args).then((value) => {
    try {
      reducer ? cb(null, ...reducer(value)) : cb(null, value);
    } catch (err) {
      cb(err);
    }
  }, cb);
} : fn, callbackify_default = callbackify;

// node_modules/axios/lib/adapters/http.js
var zlibOptions = {
  flush: import_zlib.default.constants.Z_SYNC_FLUSH,
  finishFlush: import_zlib.default.constants.Z_SYNC_FLUSH
}, brotliOptions = {
  flush: import_zlib.default.constants.BROTLI_OPERATION_FLUSH,
  finishFlush: import_zlib.default.constants.BROTLI_OPERATION_FLUSH
}, isBrotliSupported = utils_default.isFunction(import_zlib.default.createBrotliDecompress), { http: httpFollow, https: httpsFollow } = import_follow_redirects.default, isHttps = /https:?/, supportedProtocols = node_default.protocols.map((protocol) => protocol + ":");
function dispatchBeforeRedirect(options) {
  options.beforeRedirects.proxy && options.beforeRedirects.proxy(options), options.beforeRedirects.config && options.beforeRedirects.config(options);
}
function setProxy(options, configProxy, location) {
  let proxy = configProxy;
  if (!proxy && proxy !== !1) {
    let proxyUrl = (0, import_proxy_from_env.getProxyForUrl)(location);
    proxyUrl && (proxy = new URL(proxyUrl));
  }
  if (proxy) {
    if (proxy.username && (proxy.auth = (proxy.username || "") + ":" + (proxy.password || "")), proxy.auth) {
      (proxy.auth.username || proxy.auth.password) && (proxy.auth = (proxy.auth.username || "") + ":" + (proxy.auth.password || ""));
      let base64 = Buffer.from(proxy.auth, "utf8").toString("base64");
      options.headers["Proxy-Authorization"] = "Basic " + base64;
    }
    options.headers.host = options.hostname + (options.port ? ":" + options.port : "");
    let proxyHost = proxy.hostname || proxy.host;
    options.hostname = proxyHost, options.host = proxyHost, options.port = proxy.port, options.path = location, proxy.protocol && (options.protocol = proxy.protocol.includes(":") ? proxy.protocol : `${proxy.protocol}:`);
  }
  options.beforeRedirects.proxy = function(redirectOptions) {
    setProxy(redirectOptions, configProxy, redirectOptions.href);
  };
}
var isHttpAdapterSupported = typeof process < "u" && utils_default.kindOf(process) === "process", wrapAsync = (asyncExecutor) => new Promise((resolve, reject) => {
  let onDone, isDone, done = (value, isRejected) => {
    isDone || (isDone = !0, onDone && onDone(value, isRejected));
  }, _resolve = (value) => {
    done(value), resolve(value);
  }, _reject = (reason) => {
    done(reason, !0), reject(reason);
  };
  asyncExecutor(_resolve, _reject, (onDoneHandler) => onDone = onDoneHandler).catch(_reject);
}), http_default = isHttpAdapterSupported && function(config) {
  return wrapAsync(async function(resolve, reject, onDone) {
    let { data, lookup, family } = config, { responseType, responseEncoding } = config, method = config.method.toUpperCase(), isDone, rejected = !1, req;
    lookup && utils_default.isAsyncFn(lookup) && (lookup = callbackify_default(lookup, (entry2) => {
      if (utils_default.isString(entry2))
        entry2 = [entry2, entry2.indexOf(".") < 0 ? 6 : 4];
      else if (!utils_default.isArray(entry2))
        throw new TypeError("lookup async function must return an array [ip: string, family: number]]");
      return entry2;
    }));
    let emitter = new import_events.default(), onFinished = () => {
      config.cancelToken && config.cancelToken.unsubscribe(abort), config.signal && config.signal.removeEventListener("abort", abort), emitter.removeAllListeners();
    };
    onDone((value, isRejected) => {
      isDone = !0, isRejected && (rejected = !0, onFinished());
    });
    function abort(reason) {
      emitter.emit("abort", !reason || reason.type ? new CanceledError_default(null, config, req) : reason);
    }
    emitter.once("abort", reject), (config.cancelToken || config.signal) && (config.cancelToken && config.cancelToken.subscribe(abort), config.signal && (config.signal.aborted ? abort() : config.signal.addEventListener("abort", abort)));
    let fullPath = buildFullPath(config.baseURL, config.url), parsed = new URL(fullPath, "http://localhost"), protocol = parsed.protocol || supportedProtocols[0];
    if (protocol === "data:") {
      let convertedData;
      if (method !== "GET")
        return settle(resolve, reject, {
          status: 405,
          statusText: "method not allowed",
          headers: {},
          config
        });
      try {
        convertedData = fromDataURI(config.url, responseType === "blob", {
          Blob: config.env && config.env.Blob
        });
      } catch (err) {
        throw AxiosError_default.from(err, AxiosError_default.ERR_BAD_REQUEST, config);
      }
      return responseType === "text" ? (convertedData = convertedData.toString(responseEncoding), (!responseEncoding || responseEncoding === "utf8") && (convertedData = utils_default.stripBOM(convertedData))) : responseType === "stream" && (convertedData = import_stream4.default.Readable.from(convertedData)), settle(resolve, reject, {
        data: convertedData,
        status: 200,
        statusText: "OK",
        headers: new AxiosHeaders_default(),
        config
      });
    }
    if (supportedProtocols.indexOf(protocol) === -1)
      return reject(new AxiosError_default(
        "Unsupported protocol " + protocol,
        AxiosError_default.ERR_BAD_REQUEST,
        config
      ));
    let headers = AxiosHeaders_default.from(config.headers).normalize();
    headers.set("User-Agent", "axios/" + VERSION, !1);
    let onDownloadProgress = config.onDownloadProgress, onUploadProgress = config.onUploadProgress, maxRate = config.maxRate, maxUploadRate, maxDownloadRate;
    if (utils_default.isSpecCompliantForm(data)) {
      let userBoundary = headers.getContentType(/boundary=([-_\w\d]{10,70})/i);
      data = formDataToStream_default(data, (formHeaders) => {
        headers.set(formHeaders);
      }, {
        tag: `axios-${VERSION}-boundary`,
        boundary: userBoundary && userBoundary[1] || void 0
      });
    } else if (utils_default.isFormData(data) && utils_default.isFunction(data.getHeaders)) {
      if (headers.set(data.getHeaders()), !headers.hasContentLength())
        try {
          let knownLength = await import_util2.default.promisify(data.getLength).call(data);
          Number.isFinite(knownLength) && knownLength >= 0 && headers.setContentLength(knownLength);
        } catch {
        }
    } else if (utils_default.isBlob(data))
      data.size && headers.setContentType(data.type || "application/octet-stream"), headers.setContentLength(data.size || 0), data = import_stream4.default.Readable.from(readBlob_default(data));
    else if (data && !utils_default.isStream(data)) {
      if (!Buffer.isBuffer(data))
        if (utils_default.isArrayBuffer(data))
          data = Buffer.from(new Uint8Array(data));
        else if (utils_default.isString(data))
          data = Buffer.from(data, "utf-8");
        else
          return reject(new AxiosError_default(
            "Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",
            AxiosError_default.ERR_BAD_REQUEST,
            config
          ));
      if (headers.setContentLength(data.length, !1), config.maxBodyLength > -1 && data.length > config.maxBodyLength)
        return reject(new AxiosError_default(
          "Request body larger than maxBodyLength limit",
          AxiosError_default.ERR_BAD_REQUEST,
          config
        ));
    }
    let contentLength = utils_default.toFiniteNumber(headers.getContentLength());
    utils_default.isArray(maxRate) ? (maxUploadRate = maxRate[0], maxDownloadRate = maxRate[1]) : maxUploadRate = maxDownloadRate = maxRate, data && (onUploadProgress || maxUploadRate) && (utils_default.isStream(data) || (data = import_stream4.default.Readable.from(data, { objectMode: !1 })), data = import_stream4.default.pipeline([data, new AxiosTransformStream_default({
      length: contentLength,
      maxRate: utils_default.toFiniteNumber(maxUploadRate)
    })], utils_default.noop), onUploadProgress && data.on("progress", (progress) => {
      onUploadProgress(Object.assign(progress, {
        upload: !0
      }));
    }));
    let auth;
    if (config.auth) {
      let username = config.auth.username || "", password = config.auth.password || "";
      auth = username + ":" + password;
    }
    if (!auth && parsed.username) {
      let urlUsername = parsed.username, urlPassword = parsed.password;
      auth = urlUsername + ":" + urlPassword;
    }
    auth && headers.delete("authorization");
    let path;
    try {
      path = buildURL(
        parsed.pathname + parsed.search,
        config.params,
        config.paramsSerializer
      ).replace(/^\?/, "");
    } catch (err) {
      let customErr = new Error(err.message);
      return customErr.config = config, customErr.url = config.url, customErr.exists = !0, reject(customErr);
    }
    headers.set(
      "Accept-Encoding",
      "gzip, compress, deflate" + (isBrotliSupported ? ", br" : ""),
      !1
    );
    let options = {
      path,
      method,
      headers: headers.toJSON(),
      agents: { http: config.httpAgent, https: config.httpsAgent },
      auth,
      protocol,
      family,
      lookup,
      beforeRedirect: dispatchBeforeRedirect,
      beforeRedirects: {}
    };
    config.socketPath ? options.socketPath = config.socketPath : (options.hostname = parsed.hostname, options.port = parsed.port, setProxy(options, config.proxy, protocol + "//" + parsed.hostname + (parsed.port ? ":" + parsed.port : "") + options.path));
    let transport, isHttpsRequest = isHttps.test(options.protocol);
    if (options.agent = isHttpsRequest ? config.httpsAgent : config.httpAgent, config.transport ? transport = config.transport : config.maxRedirects === 0 ? transport = isHttpsRequest ? import_https.default : import_http.default : (config.maxRedirects && (options.maxRedirects = config.maxRedirects), config.beforeRedirect && (options.beforeRedirects.config = config.beforeRedirect), transport = isHttpsRequest ? httpsFollow : httpFollow), config.maxBodyLength > -1 ? options.maxBodyLength = config.maxBodyLength : options.maxBodyLength = 1 / 0, config.insecureHTTPParser && (options.insecureHTTPParser = config.insecureHTTPParser), req = transport.request(options, function(res) {
      if (req.destroyed)
        return;
      let streams = [res], responseLength = +res.headers["content-length"];
      if (onDownloadProgress) {
        let transformStream = new AxiosTransformStream_default({
          length: utils_default.toFiniteNumber(responseLength),
          maxRate: utils_default.toFiniteNumber(maxDownloadRate)
        });
        onDownloadProgress && transformStream.on("progress", (progress) => {
          onDownloadProgress(Object.assign(progress, {
            download: !0
          }));
        }), streams.push(transformStream);
      }
      let responseStream = res, lastRequest = res.req || req;
      if (config.decompress !== !1 && res.headers["content-encoding"])
        switch ((method === "HEAD" || res.statusCode === 204) && delete res.headers["content-encoding"], res.headers["content-encoding"]) {
          case "gzip":
          case "x-gzip":
          case "compress":
          case "x-compress":
            streams.push(import_zlib.default.createUnzip(zlibOptions)), delete res.headers["content-encoding"];
            break;
          case "deflate":
            streams.push(new ZlibHeaderTransformStream_default()), streams.push(import_zlib.default.createUnzip(zlibOptions)), delete res.headers["content-encoding"];
            break;
          case "br":
            isBrotliSupported && (streams.push(import_zlib.default.createBrotliDecompress(brotliOptions)), delete res.headers["content-encoding"]);
        }
      responseStream = streams.length > 1 ? import_stream4.default.pipeline(streams, utils_default.noop) : streams[0];
      let offListeners = import_stream4.default.finished(responseStream, () => {
        offListeners(), onFinished();
      }), response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: new AxiosHeaders_default(res.headers),
        config,
        request: lastRequest
      };
      if (responseType === "stream")
        response.data = responseStream, settle(resolve, reject, response);
      else {
        let responseBuffer = [], totalResponseBytes = 0;
        responseStream.on("data", function(chunk) {
          responseBuffer.push(chunk), totalResponseBytes += chunk.length, config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength && (rejected = !0, responseStream.destroy(), reject(new AxiosError_default(
            "maxContentLength size of " + config.maxContentLength + " exceeded",
            AxiosError_default.ERR_BAD_RESPONSE,
            config,
            lastRequest
          )));
        }), responseStream.on("aborted", function() {
          if (rejected)
            return;
          let err = new AxiosError_default(
            "maxContentLength size of " + config.maxContentLength + " exceeded",
            AxiosError_default.ERR_BAD_RESPONSE,
            config,
            lastRequest
          );
          responseStream.destroy(err), reject(err);
        }), responseStream.on("error", function(err) {
          req.destroyed || reject(AxiosError_default.from(err, null, config, lastRequest));
        }), responseStream.on("end", function() {
          try {
            let responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
            responseType !== "arraybuffer" && (responseData = responseData.toString(responseEncoding), (!responseEncoding || responseEncoding === "utf8") && (responseData = utils_default.stripBOM(responseData))), response.data = responseData;
          } catch (err) {
            reject(AxiosError_default.from(err, null, config, response.request, response));
          }
          settle(resolve, reject, response);
        });
      }
      emitter.once("abort", (err) => {
        responseStream.destroyed || (responseStream.emit("error", err), responseStream.destroy());
      });
    }), emitter.once("abort", (err) => {
      reject(err), req.destroy(err);
    }), req.on("error", function(err) {
      reject(AxiosError_default.from(err, null, config, req));
    }), req.on("socket", function(socket) {
      socket.setKeepAlive(!0, 1e3 * 60);
    }), config.timeout) {
      let timeout = parseInt(config.timeout, 10);
      if (isNaN(timeout)) {
        reject(new AxiosError_default(
          "error trying to parse `config.timeout` to int",
          AxiosError_default.ERR_BAD_OPTION_VALUE,
          config,
          req
        ));
        return;
      }
      req.setTimeout(timeout, function() {
        if (isDone)
          return;
        let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded", transitional2 = config.transitional || transitional_default;
        config.timeoutErrorMessage && (timeoutErrorMessage = config.timeoutErrorMessage), reject(new AxiosError_default(
          timeoutErrorMessage,
          transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
          config,
          req
        )), abort();
      });
    }
    if (utils_default.isStream(data)) {
      let ended = !1, errored = !1;
      data.on("end", () => {
        ended = !0;
      }), data.once("error", (err) => {
        errored = !0, req.destroy(err);
      }), data.on("close", () => {
        !ended && !errored && abort(new CanceledError_default("Request stream has been aborted", config, req));
      }), data.pipe(req);
    } else
      req.end(data);
  });
};

// node_modules/axios/lib/helpers/cookies.js
var cookies_default = node_default.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(name, value, expires, path, domain, secure) {
        let cookie = [];
        cookie.push(name + "=" + encodeURIComponent(value)), utils_default.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString()), utils_default.isString(path) && cookie.push("path=" + path), utils_default.isString(domain) && cookie.push("domain=" + domain), secure === !0 && cookie.push("secure"), document.cookie = cookie.join("; ");
      },
      read: function(name) {
        let match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
        return match ? decodeURIComponent(match[3]) : null;
      },
      remove: function(name) {
        this.write(name, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);

// node_modules/axios/lib/helpers/isURLSameOrigin.js
var isURLSameOrigin_default = node_default.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    let msie = /(msie|trident)/i.test(navigator.userAgent), urlParsingNode = document.createElement("a"), originURL;
    function resolveURL(url3) {
      let href = url3;
      return msie && (urlParsingNode.setAttribute("href", href), href = urlParsingNode.href), urlParsingNode.setAttribute("href", href), {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
      };
    }
    return originURL = resolveURL(window.location.href), function(requestURL) {
      let parsed = utils_default.isString(requestURL) ? resolveURL(requestURL) : requestURL;
      return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);

// node_modules/axios/lib/adapters/xhr.js
function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0, _speedometer = speedometer_default(50, 250);
  return (e) => {
    let loaded = e.loaded, total = e.lengthComputable ? e.total : void 0, progressBytes = loaded - bytesNotified, rate = _speedometer(progressBytes), inRange = loaded <= total;
    bytesNotified = loaded;
    let data = {
      loaded,
      total,
      progress: total ? loaded / total : void 0,
      bytes: progressBytes,
      rate: rate || void 0,
      estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
      event: e
    };
    data[isDownloadStream ? "download" : "upload"] = !0, listener(data);
  };
}
var isXHRAdapterSupported = typeof XMLHttpRequest < "u", xhr_default = isXHRAdapterSupported && function(config) {
  return new Promise(function(resolve, reject) {
    let requestData = config.data, requestHeaders = AxiosHeaders_default.from(config.headers).normalize(), responseType = config.responseType, onCanceled;
    function done() {
      config.cancelToken && config.cancelToken.unsubscribe(onCanceled), config.signal && config.signal.removeEventListener("abort", onCanceled);
    }
    utils_default.isFormData(requestData) && (node_default.isStandardBrowserEnv || node_default.isStandardBrowserWebWorkerEnv ? requestHeaders.setContentType(!1) : requestHeaders.setContentType("multipart/form-data;", !1));
    let request = new XMLHttpRequest();
    if (config.auth) {
      let username = config.auth.username || "", password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
      requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
    }
    let fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), !0), request.timeout = config.timeout;
    function onloadend() {
      if (!request)
        return;
      let responseHeaders = AxiosHeaders_default.from(
        "getAllResponseHeaders" in request && request.getAllResponseHeaders()
      ), response = {
        data: !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      settle(function(value) {
        resolve(value), done();
      }, function(err) {
        reject(err), done();
      }, response), request = null;
    }
    if ("onloadend" in request ? request.onloadend = onloadend : request.onreadystatechange = function() {
      !request || request.readyState !== 4 || request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0) || setTimeout(onloadend);
    }, request.onabort = function() {
      request && (reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request)), request = null);
    }, request.onerror = function() {
      reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request)), request = null;
    }, request.ontimeout = function() {
      let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded", transitional2 = config.transitional || transitional_default;
      config.timeoutErrorMessage && (timeoutErrorMessage = config.timeoutErrorMessage), reject(new AxiosError_default(
        timeoutErrorMessage,
        transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
        config,
        request
      )), request = null;
    }, node_default.isStandardBrowserEnv) {
      let xsrfValue = (config.withCredentials || isURLSameOrigin_default(fullPath)) && config.xsrfCookieName && cookies_default.read(config.xsrfCookieName);
      xsrfValue && requestHeaders.set(config.xsrfHeaderName, xsrfValue);
    }
    requestData === void 0 && requestHeaders.setContentType(null), "setRequestHeader" in request && utils_default.forEach(requestHeaders.toJSON(), function(val, key) {
      request.setRequestHeader(key, val);
    }), utils_default.isUndefined(config.withCredentials) || (request.withCredentials = !!config.withCredentials), responseType && responseType !== "json" && (request.responseType = config.responseType), typeof config.onDownloadProgress == "function" && request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, !0)), typeof config.onUploadProgress == "function" && request.upload && request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress)), (config.cancelToken || config.signal) && (onCanceled = (cancel) => {
      request && (reject(!cancel || cancel.type ? new CanceledError_default(null, config, request) : cancel), request.abort(), request = null);
    }, config.cancelToken && config.cancelToken.subscribe(onCanceled), config.signal && (config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled)));
    let protocol = parseProtocol(fullPath);
    if (protocol && node_default.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
      return;
    }
    request.send(requestData || null);
  });
};

// node_modules/axios/lib/adapters/adapters.js
var knownAdapters = {
  http: http_default,
  xhr: xhr_default
};
utils_default.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, "name", { value });
    } catch {
    }
    Object.defineProperty(fn, "adapterName", { value });
  }
});
var adapters_default = {
  getAdapter: (adapters) => {
    adapters = utils_default.isArray(adapters) ? adapters : [adapters];
    let { length } = adapters, nameOrAdapter, adapter;
    for (let i = 0; i < length && (nameOrAdapter = adapters[i], !(adapter = utils_default.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter)); i++)
      ;
    if (!adapter)
      throw adapter === !1 ? new AxiosError_default(
        `Adapter ${nameOrAdapter} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        utils_default.hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`
      );
    if (!utils_default.isFunction(adapter))
      throw new TypeError("adapter is not a function");
    return adapter;
  },
  adapters: knownAdapters
};

// node_modules/axios/lib/core/dispatchRequest.js
function throwIfCancellationRequested(config) {
  if (config.cancelToken && config.cancelToken.throwIfRequested(), config.signal && config.signal.aborted)
    throw new CanceledError_default(null, config);
}
function dispatchRequest(config) {
  return throwIfCancellationRequested(config), config.headers = AxiosHeaders_default.from(config.headers), config.data = transformData.call(
    config,
    config.transformRequest
  ), ["post", "put", "patch"].indexOf(config.method) !== -1 && config.headers.setContentType("application/x-www-form-urlencoded", !1), adapters_default.getAdapter(config.adapter || defaults_default.adapter)(config).then(function(response) {
    return throwIfCancellationRequested(config), response.data = transformData.call(
      config,
      config.transformResponse,
      response
    ), response.headers = AxiosHeaders_default.from(response.headers), response;
  }, function(reason) {
    return isCancel(reason) || (throwIfCancellationRequested(config), reason && reason.response && (reason.response.data = transformData.call(
      config,
      config.transformResponse,
      reason.response
    ), reason.response.headers = AxiosHeaders_default.from(reason.response.headers))), Promise.reject(reason);
  });
}

// node_modules/axios/lib/core/mergeConfig.js
var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? thing.toJSON() : thing;
function mergeConfig(config1, config2) {
  config2 = config2 || {};
  let config = {};
  function getMergedValue(target, source, caseless) {
    return utils_default.isPlainObject(target) && utils_default.isPlainObject(source) ? utils_default.merge.call({ caseless }, target, source) : utils_default.isPlainObject(source) ? utils_default.merge({}, source) : utils_default.isArray(source) ? source.slice() : source;
  }
  function mergeDeepProperties(a, b, caseless) {
    if (utils_default.isUndefined(b)) {
      if (!utils_default.isUndefined(a))
        return getMergedValue(void 0, a, caseless);
    } else
      return getMergedValue(a, b, caseless);
  }
  function valueFromConfig2(a, b) {
    if (!utils_default.isUndefined(b))
      return getMergedValue(void 0, b);
  }
  function defaultToConfig2(a, b) {
    if (utils_default.isUndefined(b)) {
      if (!utils_default.isUndefined(a))
        return getMergedValue(void 0, a);
    } else
      return getMergedValue(void 0, b);
  }
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2)
      return getMergedValue(a, b);
    if (prop in config1)
      return getMergedValue(void 0, a);
  }
  let mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), !0)
  };
  return utils_default.forEach(Object.keys(Object.assign({}, config1, config2)), function(prop) {
    let merge2 = mergeMap[prop] || mergeDeepProperties, configValue = merge2(config1[prop], config2[prop], prop);
    utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  }), config;
}

// node_modules/axios/lib/helpers/validator.js
var validators = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
  validators[type] = function(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators.transitional = function(validator, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator === !1)
      throw new AxiosError_default(
        formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
        AxiosError_default.ERR_DEPRECATED
      );
    return version && !deprecatedWarnings[opt] && (deprecatedWarnings[opt] = !0, console.warn(
      formatMessage(
        opt,
        " has been deprecated since v" + version + " and will be removed in the near future"
      )
    )), validator ? validator(value, opt, opts) : !0;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options != "object")
    throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
  let keys = Object.keys(options), i = keys.length;
  for (; i-- > 0; ) {
    let opt = keys[i], validator = schema[opt];
    if (validator) {
      let value = options[opt], result = value === void 0 || validator(value, opt, options);
      if (result !== !0)
        throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (allowUnknown !== !0)
      throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
  }
}
var validator_default = {
  assertOptions,
  validators
};

// node_modules/axios/lib/core/Axios.js
var validators2 = validator_default.validators, Axios = class {
  constructor(instanceConfig) {
    this.defaults = instanceConfig, this.interceptors = {
      request: new InterceptorManager_default(),
      response: new InterceptorManager_default()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    typeof configOrUrl == "string" ? (config = config || {}, config.url = configOrUrl) : config = configOrUrl || {}, config = mergeConfig(this.defaults, config);
    let { transitional: transitional2, paramsSerializer, headers } = config;
    transitional2 !== void 0 && validator_default.assertOptions(transitional2, {
      silentJSONParsing: validators2.transitional(validators2.boolean),
      forcedJSONParsing: validators2.transitional(validators2.boolean),
      clarifyTimeoutError: validators2.transitional(validators2.boolean)
    }, !1), paramsSerializer != null && (utils_default.isFunction(paramsSerializer) ? config.paramsSerializer = {
      serialize: paramsSerializer
    } : validator_default.assertOptions(paramsSerializer, {
      encode: validators2.function,
      serialize: validators2.function
    }, !0)), config.method = (config.method || this.defaults.method || "get").toLowerCase();
    let contextHeaders;
    contextHeaders = headers && utils_default.merge(
      headers.common,
      headers[config.method]
    ), contextHeaders && utils_default.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (method) => {
        delete headers[method];
      }
    ), config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
    let requestInterceptorChain = [], synchronousRequestInterceptors = !0;
    this.interceptors.request.forEach(function(interceptor) {
      typeof interceptor.runWhen == "function" && interceptor.runWhen(config) === !1 || (synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous, requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected));
    });
    let responseInterceptorChain = [];
    this.interceptors.response.forEach(function(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise, i = 0, len;
    if (!synchronousRequestInterceptors) {
      let chain = [dispatchRequest.bind(this), void 0];
      for (chain.unshift.apply(chain, requestInterceptorChain), chain.push.apply(chain, responseInterceptorChain), len = chain.length, promise = Promise.resolve(config); i < len; )
        promise = promise.then(chain[i++], chain[i++]);
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    for (i = 0; i < len; ) {
      let onFulfilled = requestInterceptorChain[i++], onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    for (i = 0, len = responseInterceptorChain.length; i < len; )
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    return promise;
  }
  getUri(config) {
    config = mergeConfig(this.defaults, config);
    let fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
};
utils_default.forEach(["delete", "get", "head", "options"], function(method) {
  Axios.prototype[method] = function(url3, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url: url3,
      data: (config || {}).data
    }));
  };
});
utils_default.forEach(["post", "put", "patch"], function(method) {
  function generateHTTPMethod(isForm) {
    return function(url3, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: url3,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod(), Axios.prototype[method + "Form"] = generateHTTPMethod(!0);
});
var Axios_default = Axios;

// node_modules/axios/lib/cancel/CancelToken.js
var CancelToken = class {
  constructor(executor) {
    if (typeof executor != "function")
      throw new TypeError("executor must be a function.");
    let resolvePromise;
    this.promise = new Promise(function(resolve) {
      resolvePromise = resolve;
    });
    let token = this;
    this.promise.then((cancel) => {
      if (!token._listeners)
        return;
      let i = token._listeners.length;
      for (; i-- > 0; )
        token._listeners[i](cancel);
      token._listeners = null;
    }), this.promise.then = (onfulfilled) => {
      let _resolve, promise = new Promise((resolve) => {
        token.subscribe(resolve), _resolve = resolve;
      }).then(onfulfilled);
      return promise.cancel = function() {
        token.unsubscribe(_resolve);
      }, promise;
    }, executor(function(message, config, request) {
      token.reason || (token.reason = new CanceledError_default(message, config, request), resolvePromise(token.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(listener) : this._listeners = [listener];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(listener) {
    if (!this._listeners)
      return;
    let index = this._listeners.indexOf(listener);
    index !== -1 && this._listeners.splice(index, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    return {
      token: new CancelToken(function(c) {
        cancel = c;
      }),
      cancel
    };
  }
}, CancelToken_default = CancelToken;

// node_modules/axios/lib/helpers/spread.js
function spread(callback) {
  return function(arr) {
    return callback.apply(null, arr);
  };
}

// node_modules/axios/lib/helpers/isAxiosError.js
function isAxiosError(payload) {
  return utils_default.isObject(payload) && payload.isAxiosError === !0;
}

// node_modules/axios/lib/helpers/HttpStatusCode.js
var HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
var HttpStatusCode_default = HttpStatusCode;

// node_modules/axios/lib/axios.js
function createInstance(defaultConfig) {
  let context = new Axios_default(defaultConfig), instance = bind(Axios_default.prototype.request, context);
  return utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: !0 }), utils_default.extend(instance, context, null, { allOwnKeys: !0 }), instance.create = function(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  }, instance;
}
var axios = createInstance(defaults_default);
axios.Axios = Axios_default;
axios.CanceledError = CanceledError_default;
axios.CancelToken = CancelToken_default;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData_default;
axios.AxiosError = AxiosError_default;
axios.Cancel = axios.CanceledError;
axios.all = function(promises) {
  return Promise.all(promises);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders_default;
axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.HttpStatusCode = HttpStatusCode_default;
axios.default = axios;
var axios_default = axios;

// node_modules/axios/index.js
var {
  Axios: Axios2,
  AxiosError: AxiosError2,
  CanceledError: CanceledError2,
  isCancel: isCancel2,
  CancelToken: CancelToken2,
  VERSION: VERSION2,
  all: all2,
  Cancel,
  isAxiosError: isAxiosError2,
  spread: spread2,
  toFormData: toFormData2,
  AxiosHeaders: AxiosHeaders2,
  HttpStatusCode: HttpStatusCode2,
  formToJSON,
  mergeConfig: mergeConfig2
} = axios_default;

// app/modules/shopify/handler.ts
var url2 = `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2023-04/graphql.json`, storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_API_TOKEN, sendREquest = async (query, variables) => await axios_default({
  method: "post",
  url: url2,
  data: JSON.stringify({ query, variables }),
  headers: {
    "Content-Type": "application/JSON",
    "X-Shopify-Storefront-Access-Token": storefrontAccessToken
  }
}), getProduct = async (handle) => await sendREquest(queryProduct, { handle }).then((response) => {
  let requestData = response.data;
  return "data" in requestData ? requestData.data.productByHandle : {};
}).catch((error) => (console.error("Error:", error), null)), getProducts = async () => await sendREquest(queryProducts).then((response) => {
  let requestData = response.data;
  return "data" in requestData ? requestData.data.products.edges : [];
}).catch((error) => (console.error("Error:", error), null));
var getCategory = async (handle) => await sendREquest(queryCategory, { handle }).then((response) => {
  let requestData = response.data;
  return "data" in requestData ? requestData.data.collection : [];
}).catch((error) => (console.error("Error:", error), null)), getPage = async (handle) => await sendREquest(queryPage, { handle }).then((response) => {
  let requestData = response.data;
  return "data" in requestData ? requestData.data.page : null;
}).catch((error) => (console.error("Error:", error), null)), createCheckout = async (variantId, quantity) => await sendREquest(createShopifyCheckout, { variantId, quantity }).then((response) => {
  let requestData = response.data;
  return console.log("requestData", requestData), "data" in requestData ? requestData.data.cartCreate.cart : null;
}).catch((error) => (console.error("Error:", error), null)), addToCart = async (variantId, quantity) => await sendREquest(addToCartMutation, { variantId, quantity }).then((response) => {
  let requestData = response.data;
  return "data" in requestData ? requestData.data.checkoutLineItemsAdd.checkout : null;
}).catch((error) => (console.error("Error:", error), null)), updateCartQuantity = async (lineItemId, quantity, checkoutId) => await sendREquest(updateCartQuantityMutation, { lineItemId, quantity, checkoutId }).then((response) => {
  let requestData = response.data;
  return "data" in requestData ? requestData.data.checkoutLineItemsUpdate.checkout : null;
}).catch((error) => (console.error("Error:", error), null)), removeCartItem = async (lineItemId) => await sendREquest(removeCartItemMutation, { lineItemId }).then((response) => {
  let requestData = response.data;
  return "data" in requestData ? requestData.data.checkoutLineItemsRemove.checkout : null;
}).catch((error) => (console.error("Error:", error), null));

// app/routes/categories.$categoryId.tsx
var import_react6 = require("@remix-run/react");

// app/components/product-card.tsx
var import_react5 = require("@remix-run/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function ProductCard({ product }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { to: `/products/${product.node.handle}`, className: " w-full before:content-['*'] before:pt-[100%] before:block relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { className: "mb-6 w-ful h-full object-cover rounded-t-lg absolute top-0", src: product.node.featuredImage.url, alt: product.node.title }, void 0, !1, {
      fileName: "app/components/product-card.tsx",
      lineNumber: 7,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/product-card.tsx",
      lineNumber: 6,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "px-5 pt-4 pb-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { to: `/products/${product.node.handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h5", { className: "text-3xl font-semibold tracking-tight text-evagreen dark:text-white", children: product.node.title }, void 0, !1, {
        fileName: "app/components/product-card.tsx",
        lineNumber: 11,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/product-card.tsx",
        lineNumber: 10,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center justify-between my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-3xl font-thin text-gray-900 dark:text-white", children: [
        product.node.priceRange.minVariantPrice.amount,
        " ",
        product.node.priceRange.minVariantPrice.currencyCode
      ] }, void 0, !0, {
        fileName: "app/components/product-card.tsx",
        lineNumber: 16,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/product-card.tsx",
        lineNumber: 15,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_react5.Link,
        {
          to: `/products/${product.node.handle}`,
          className: "px-4 pt-3 text-center block font-medium  border-t text-evagreen text-white w-full",
          children: "View Product "
        },
        void 0,
        !1,
        {
          fileName: "app/components/product-card.tsx",
          lineNumber: 20,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/product-card.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/product-card.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/product-card.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/categories.$categoryId.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "Eva store" },
  { name: "description", content: "Welcome to Remix!" }
], loader = async ({ params }) => {
  let handle = params.categoryId, category = await getCategory(handle), products = (category == null ? void 0 : category.products.edges) || [];
  if (console.log(params), console.log(products), !handle && category === null)
    throw new Response(null, {
      status: 404,
      statusText: "Not Found"
    });
  return { category, products };
};
function Index2() {
  let { products, category } = (0, import_react6.useLoaderData)();
  return console.log(category), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "bg-cream pb-4 shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: " container mx-auto p-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "pt-8 mb-2 text-6xl text-evagreen", children: category.title }, void 0, !1, {
        fileName: "app/routes/categories.$categoryId.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { dangerouslySetInnerHTML: { __html: category.descriptionHtml } }, void 0, !1, {
        fileName: "app/routes/categories.$categoryId.tsx",
        lineNumber: 41,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/categories.$categoryId.tsx",
      lineNumber: 39,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/categories.$categoryId.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { className: "container mx-auto px-2 pt-10 block md:flex gap-4 flex-wrap mb-4", children: products == null ? void 0 : products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ProductCard, { product }, product.node.id, !1, {
      fileName: "app/routes/categories.$categoryId.tsx",
      lineNumber: 47,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/categories.$categoryId.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/categories.$categoryId.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/categories.$categoryId.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/categories.$categoryId.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

// app/routes/products.$productId.tsx
var products_productId_exports = {};
__export(products_productId_exports, {
  default: () => Products,
  loader: () => loader2,
  meta: () => meta2
});
var import_react8 = require("react"), import_react9 = require("@remix-run/react"), import_react10 = require("react"), import_node3 = __toESM(require_dist());

// app/components/product-hero.tsx
var import_react7 = require("react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), ProductHero = ({ images = [] }) => {
  let [currentIndex, setCurrentIndex] = (0, import_react7.useState)(0);
  (0, import_react7.useEffect)(() => {
    let interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6e3);
    return () => {
      clearInterval(interval);
    };
  }, [images]);
  let goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "slider relative h-96", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "slider-button", onClick: goToPrevious, children: "<" }, void 0, !1, {
      fileName: "app/components/product-hero.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    images.map((image, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "div",
      {
        className: `slide absolute top-0  w-full h-full ${index === currentIndex ? "active" : " opacity-0"}`,
        style: {
          backgroundImage: `url(${image.node.image.url})`
        }
      },
      index,
      !1,
      {
        fileName: "app/components/product-hero.tsx",
        lineNumber: 31,
        columnNumber: 9
      },
      this
    )),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "slider-button", onClick: goToNext, children: ">" }, void 0, !1, {
      fileName: "app/components/product-hero.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/product-hero.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}, product_hero_default = ProductHero;

// app/routes/products.$productId.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), meta2 = () => [
  { title: "Products" },
  { name: "description", content: "Welcome to Remix!" }
];
async function loader2({ params, request }) {
  let productId = params.productId;
  if (!productId)
    return (0, import_node3.json)({ productId, product: null, variants: [], firstAvailableVariant: {} });
  let product = await getProduct(productId), { variants } = product, firstAvailableVariant = (variants.edges || []).find((variant) => variant.node.availableForSale) || {};
  return (0, import_node3.json)({ productId, product, variants, firstAvailableVariant });
}
function Products() {
  var _a, _b;
  let { product, variants, firstAvailableVariant } = (0, import_react9.useLoaderData)(), [selectedVariant, setSelectedVariant] = (0, import_react8.useState)(firstAvailableVariant), [quantity, setQuantity] = (0, import_react8.useState)(1), quantityRef = (0, import_react10.useRef)(null), fetcher = (0, import_react9.useFetcher)(), handleVariantChange = (id) => {
    let selectedVariant2 = (variants.edges || []).find((variant) => variant.node.id === id);
    setSelectedVariant(selectedVariant2);
  };
  return (0, import_react8.useEffect)(() => {
    fetcher.state === "idle" && fetcher.data == null && fetcher.load("/cart"), console.log(fetcher);
  }, [fetcher]), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "w-full justify-center mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(product_hero_default, { images: (_a = product.hero) == null ? void 0 : _a.references.edges, children: " " }, void 0, !1, {
      fileName: "app/routes/products.$productId.tsx",
      lineNumber: 63,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/products.$productId.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "block md:flex container mx-auto ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex-1 w-full md:w-auto mb-8 min-w-[50%] relative overflow-x-auto scroll-smooth", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "gallery relative whitespace-nowrap md:whitespace-normal block snap-mandatory snap-x max-h-[50vh] md:max-h-max md:snap-none", children: (_b = product.images) == null ? void 0 : _b.edges.map((image) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "img",
        {
          className: "gallery-image snap-start inline-block",
          src: image.node.originalSrc,
          alt: image.node.altText
        },
        image.node.id,
        !1,
        {
          fileName: "app/routes/products.$productId.tsx",
          lineNumber: 71,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/products.$productId.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/products.$productId.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "sticky top-24 pl-8 pr-8 md:pr-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "text-5xl font-medium mb-4 text-green-800", children: product.title }, void 0, !1, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 83,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center gap-4 my-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-3xl font-thin", children: [
              product.priceRange.minVariantPrice.amount,
              " ",
              product.priceRange.minVariantPrice.currencyCode
            ] }, void 0, !0, {
              fileName: "app/routes/products.$productId.tsx",
              lineNumber: 88,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("hr", { className: " border-black flex-1 " }, void 0, !1, {
              fileName: "app/routes/products.$productId.tsx",
              lineNumber: 91,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: " md:text-xl", children: selectedVariant.node.title }, void 0, !1, {
              fileName: "app/routes/products.$productId.tsx",
              lineNumber: 92,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 87,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "mb-4", children: product.description }, void 0, !1, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 97,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/products.$productId.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(fetcher.Form, { method: "post", action: "/cart", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "hidden", name: "variantId", value: selectedVariant.node.id }, void 0, !1, {
              fileName: "app/routes/products.$productId.tsx",
              lineNumber: 104,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
              "input",
              {
                type: "number",
                value: quantity,
                onChange: (e) => setQuantity(parseInt(e.target.value)),
                className: "border px-4 py-2 border-black",
                min: "1",
                max: "9",
                name: "quantity",
                id: "quantity"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/products.$productId.tsx",
                lineNumber: 105,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 103,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 102,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex gap-3 my-8", children: variants == null ? void 0 : variants.edges.map((variant) => {
            var _a2;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
              "label",
              {
                className: ` cursor-pointer gap-2 items-center border-2 rounded-full px-2 py-2 inline-flex
                    ${variant.node.id === selectedVariant.node.id ? "border-green-800 hover:border-green-700" : "border-gray-300 hover:border-gray-400"}
                    `,
                htmlFor: variant.node.id,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                    "span",
                    {
                      style: { backgroundColor: (_a2 = variant.node.color) == null ? void 0 : _a2.value },
                      className: " inline-block w-8 h-8 rounded-full"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/products.$productId.tsx",
                      lineNumber: 118,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                    "input",
                    {
                      type: "radio",
                      name: "variant",
                      id: variant.node.id,
                      className: "hidden",
                      value: variant.node.id,
                      onChange: () => handleVariantChange(variant.node.id)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/products.$productId.tsx",
                      lineNumber: 122,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text-sm font-medium", children: variant.node.title }, void 0, !1, {
                    fileName: "app/routes/products.$productId.tsx",
                    lineNumber: 130,
                    columnNumber: 21
                  }, this)
                ]
              },
              variant.node.id,
              !0,
              {
                fileName: "app/routes/products.$productId.tsx",
                lineNumber: 113,
                columnNumber: 19
              },
              this
            );
          }) }, void 0, !1, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 112,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 111,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { type: "submit", className: "px-4 py-2 font-medium rounded bg-green-800 hover:bg-green-900 text-white w-full", children: "Add to Cart" }, void 0, !1, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 137,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 136,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/products.$productId.tsx",
          lineNumber: 101,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/products.$productId.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/products.$productId.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/products.$productId.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/products.$productId.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}

// app/routes/cart.update.tsx
var cart_update_exports = {};
__export(cart_update_exports, {
  default: () => Index3,
  meta: () => meta3
});
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), meta3 = () => [
  { title: "Cart" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { children: "cart" }, void 0, !1, {
      fileName: "app/routes/cart.update.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "a",
        {
          target: "_blank",
          href: "https://remix.run/tutorials/blog",
          rel: "noreferrer",
          children: "15m Quickstart Blog Tutorial"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/cart.update.tsx",
          lineNumber: 16,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/cart.update.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "a",
        {
          target: "_blank",
          href: "https://remix.run/tutorials/jokes",
          rel: "noreferrer",
          className: "text-red-500",
          children: "Deep Dive Jokes App Tutorial"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/cart.update.tsx",
          lineNumber: 25,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/cart.update.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("a", { target: "_blank", href: "https://remix.run/docs", rel: "noreferrer", children: "Remix Docs" }, void 0, !1, {
        fileName: "app/routes/cart.update.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.update.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.update.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cart.update.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/categories.tsx
var categories_exports = {};
__export(categories_exports, {
  default: () => Index4
});
var import_react11 = require("@remix-run/react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Index4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react11.Outlet, {}, void 0, !1, {
    fileName: "app/routes/categories.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/products.tsx
var products_exports = {};
__export(products_exports, {
  default: () => Index5,
  meta: () => meta4
});
var import_react12 = require("@remix-run/react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), meta4 = () => [
  { title: "Products Index" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index5() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react12.Outlet, {}, void 0, !1, {
    fileName: "app/routes/products.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index6,
  links: () => links2,
  loader: () => loader3,
  meta: () => meta5
});
var import_react13 = require("@remix-run/react"), import_react14 = require("@remix-run/react");

// app/style/home-page.css
var home_page_default = "/build/_assets/home-page-GA2LUBTT.css";

// app/routes/_index.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), links2 = () => [
  { rel: "stylesheet", href: home_page_default }
], meta5 = () => [
  { title: "Eva store" },
  { name: "description", content: "Welcome to Remix!" }
], loader3 = async () => {
  let page = await getPage("home-page"), products = await getProducts() || [];
  return { page, products };
};
function Index6() {
  let { products, page } = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "home-page", dangerouslySetInnerHTML: { __html: page.body } }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { children: "Featured Products" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 34,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("ul", { children: products == null ? void 0 : products.map(
        (product) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { children: product.node.title }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 38,
            columnNumber: 14
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react14.Link, { to: `/products/${product.node.handle}`, className: ` bg-black text-white
              rounded-sm px-4 py-2`, children: "View Product" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 39,
            columnNumber: 14
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: [
            "Price: ",
            product.node.priceRange.minVariantPrice.amount,
            " ",
            product.node.priceRange.minVariantPrice.currencyCode
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 42,
            columnNumber: 14
          }, this)
        ] }, product.node.id, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 35,
        columnNumber: 8
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/routes/cart.tsx
var cart_exports = {};
__export(cart_exports, {
  action: () => action,
  default: () => Index7,
  loader: () => loader4,
  meta: () => meta6
});
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), meta6 = () => [
  { title: "Cart" },
  { name: "description", content: "Welcome to Remix!" }
];
async function loader4({ request }) {
  let getData = async () => {
    let formdata = await request.formData(), data = {};
    for (var pair of formdata.entries())
      data[pair[0]] = pair[1];
    return data;
  };
  switch (request.method) {
    case "GET":
      return {};
    case "POST": {
      let { variantId, quantity } = await getData();
      return addToCart(variantId, quantity);
    }
    case "PUT": {
      let { checkoutId, variantId, quantity } = await getData();
      return updateCartQuantity(variantId, quantity, checkoutId);
    }
    case "DELETE": {
      let { itemId } = await getData();
      return removeCartItem(itemId);
    }
    default:
      return new Response("Method Not Allowed", {
        status: 405
      });
  }
}
async function action({ request }) {
  let getData = async () => {
    let formdata = await request.formData(), data = {};
    for (var pair of formdata.entries())
      data[pair[0]] = pair[1];
    return console.log(data), data;
  };
  switch (request.method) {
    case "GET":
      return {};
    case "POST": {
      let { variantId, quantity } = await getData(), cart = await createCheckout(variantId, Number(quantity));
      return console.log(cart), cart;
    }
    case "PUT": {
      let { checkoutId, variantId, quantity } = await getData();
      return updateCartQuantity(variantId, Number(quantity), checkoutId);
    }
    case "DELETE": {
      let { itemId } = await getData();
      return removeCartItem(itemId);
    }
    default:
      return new Response("Method Not Allowed", {
        status: 405
      });
  }
}
function Index7() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { children: "cart" }, void 0, !1, {
      fileName: "app/routes/cart.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        "a",
        {
          target: "_blank",
          href: "https://remix.run/tutorials/blog",
          rel: "noreferrer",
          children: "15m Quickstart Blog Tutorial"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/cart.tsx",
          lineNumber: 98,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        "a",
        {
          target: "_blank",
          href: "https://remix.run/tutorials/jokes",
          rel: "noreferrer",
          className: "text-red-500",
          children: "Deep Dive Jokes App Tutorial"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/cart.tsx",
          lineNumber: 107,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("a", { target: "_blank", href: "https://remix.run/docs", rel: "noreferrer", children: "Remix Docs" }, void 0, !1, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 117,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cart.tsx",
    lineNumber: 94,
    columnNumber: 5
  }, this);
}

// server-entry-module:@remix-run/dev/server-build
init_assets_manifest();
var assetsBuildDirectory = "public\\build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/categories.$categoryId": {
    id: "routes/categories.$categoryId",
    parentId: "routes/categories",
    path: ":categoryId",
    index: void 0,
    caseSensitive: void 0,
    module: categories_categoryId_exports
  },
  "routes/products.$productId": {
    id: "routes/products.$productId",
    parentId: "routes/products",
    path: ":productId",
    index: void 0,
    caseSensitive: void 0,
    module: products_productId_exports
  },
  "routes/cart.update": {
    id: "routes/cart.update",
    parentId: "routes/cart",
    path: "update",
    index: void 0,
    caseSensitive: void 0,
    module: cart_update_exports
  },
  "routes/categories": {
    id: "routes/categories",
    parentId: "root",
    path: "categories",
    index: void 0,
    caseSensitive: void 0,
    module: categories_exports
  },
  "routes/products": {
    id: "routes/products",
    parentId: "root",
    path: "products",
    index: void 0,
    caseSensitive: void 0,
    module: products_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/cart": {
    id: "routes/cart",
    parentId: "root",
    path: "cart",
    index: void 0,
    caseSensitive: void 0,
    module: cart_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/node/dist/fetch.js:
  (**
   * @remix-run/node v1.16.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/node/dist/base64.js:
  (**
   * @remix-run/node v1.16.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/node/dist/globals.js:
  (**
   * @remix-run/node v1.16.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/node/dist/crypto.js:
  (**
   * @remix-run/node v1.16.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/node/dist/implementations.js:
  (**
   * @remix-run/node v1.16.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/node/dist/sessions/fileStorage.js:
  (**
   * @remix-run/node v1.16.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/node/dist/stream.js:
  (**
   * @remix-run/node v1.16.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/node/dist/upload/fileUploadHandler.js:
  (**
   * @remix-run/node v1.16.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/node/dist/index.js:
  (**
   * @remix-run/node v1.16.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/css-bundle/dist/server.js:
  (**
   * @remix-run/css-bundle v1.16.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=index.js.map
