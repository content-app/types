import { ClientAPI, Environment, Space } from 'contentful-management';

export interface ModuleInstallProps {
    client: ClientAPI;
    environment: Environment;
    space: Space;
}