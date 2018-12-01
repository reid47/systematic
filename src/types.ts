export interface Config {
  settings: {
    namespace: NamespaceConfig | false;
    propertyMapping: PropertyMappingConfig;
  };

  colors: ColorConfig;
}

export interface ColorConfig {
  [name: string]: string;
}

export interface NamespaceConfig {
  prefix: string | boolean;
  parentClass: string | boolean;
  peerClass: string | boolean;
}

export interface PropertyMappingConfig {
  [property: string]: string | boolean;
  'background-color': string | boolean;
  'border-color': string | boolean;
  color: string | boolean;
  fill: string | boolean;
}

export interface OutputOptions {
  format: 'css' | 'sass';
}