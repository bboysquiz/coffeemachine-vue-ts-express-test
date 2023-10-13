export interface Data {
    configs: Config[]
}
export interface Config {
    id: number,
    size: string, 
    drinksCount: number
}
export type CountAction = 'increment' | 'decrement'