export interface Image {
  data: {
    attributes: {
      name: string;
      alternativeText: null | string;
      caption: null | string;
      width: number;
      height: number;
      formats: Formats;
      hash: string;
      ext: EXT;
      mime: MIME;
      size: number;
      url: string;
      previewUrl: null;
      provider: string;
      provider_metadata: ProviderMetadata;
      created_at: Date;
      updated_at: Date;
    };
  };
}

export enum EXT {
  Jpg = ".jpg",
  PNG = ".png",
  Webp = ".webp",
}

export interface Formats {
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  name: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  width: number;
  height: number;
  size: number;
  path: null;
  url: string;
  provider_metadata: ProviderMetadata;
}

export enum MIME {
  ImageJPEG = "image/jpeg",
  ImagePNG = "image/png",
  ImageWebP = "image/webp",
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: ResourceType;
}

export enum ResourceType {
  Image = "image",
}

export interface Page {
  title: string;
  path: string;
}
