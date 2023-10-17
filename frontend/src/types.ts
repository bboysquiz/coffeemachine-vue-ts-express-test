export interface Data {
    savedConfigs: Config[],
    configs: ConfigTemplate[],
    popupDisplay: boolean,
    popupErrorDisplay: boolean,
}
export interface Config {
    id: number,
    [key: string]: any,
}
export interface ConfigTemplate {
    id: number,
    options: string[] | number[] | null
}
export type CountAction = 'increment' | 'decrement'

export interface State {
    configurations: Config[];
    selectedOptions: Config;
}