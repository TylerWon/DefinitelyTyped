export = SHA512;
declare function SHA512(): void;
declare class SHA512 {
    toString(): string;
    digest(resultType?: string | DigestType): string | Uint8Array | ArrayBuffer;
    hexDigest(): string;
    update(data: string | Uint8Array | ArrayBuffer): SHA512;
}
declare namespace SHA512 {
    export { digest, hexDigest, DigestType };
}
declare function digest(
    data: string | Uint8Array | ArrayBuffer,
    resultType?: string | DigestType
): string | Uint8Array | ArrayBuffer;
declare function hexDigest(data: string | Uint8Array | ArrayBuffer): string;
type DigestType = typeof import('./DigestType');
