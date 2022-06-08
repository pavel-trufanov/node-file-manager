import {up} from "../navigate/up.js";
import {cd} from "../navigate/cd.js";
import {ls} from "../navigate/ls.js";
import {add} from "../files/add.js";
import {cp} from "../files/cp.js";
import {mv} from "../files/mv.js";
import {rm} from "../files/rm.js";
import {rn} from "../files/rn.js";
import {os} from "../system/os.js";
import {hash} from "../hash/hash.js";
import {compress} from "../compress/compress.js";
import {decompress} from "../compress/decompress.js";
import {cat} from "../files/cat.js";

export const commandsMapping = {
    'up': up,
    'cd': cd,
    'ls': ls,
    'cat': cat,
    'add': add,
    'cp': cp,
    'mv': mv,
    'rm': rm,
    'rn': rn,
    'os': os,
    'hash': hash,
    'compress': compress,
    'decompress': decompress
}
