import { ClientAPI, Environment, Space } from 'contentful-management';
import { ContentfulClientApi } from 'contentful';

export interface ModuleInstallProps {
    client: ClientAPI;
    environment: Environment;
    space: Space;
};


interface ContentModuleConfig {
    client: ContentfulClientApi;
    moduleData: any; 
    fetchFromContentful: () => Promise<any>;
};

export interface ContentModule {
    name: string;
    fetch(data: ContentModuleConfig): Promise<any>;
};