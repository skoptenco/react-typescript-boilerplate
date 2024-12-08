import {TBuildPaths} from "./types";
import path from "path";

export const ROOT_DIR = path.resolve(__dirname, "..", "..");
export const BUILD_DIR = path.resolve(ROOT_DIR, "build");
export const SRC_DIR = path.resolve(ROOT_DIR, "src");
export const PUBLIC_DIR = path.resolve(ROOT_DIR, "public");

const paths: TBuildPaths = {
    entry: path.resolve(SRC_DIR, "index.tsx"),
    output: BUILD_DIR,
    html: path.resolve(PUBLIC_DIR, "index.html"),
    tsconfig: path.resolve(ROOT_DIR, "tsconfig.json"),
    modules: path.resolve(ROOT_DIR, "node_modules"),
}

export default paths;
