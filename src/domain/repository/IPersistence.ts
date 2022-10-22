interface IPersistence {
    create(entity: any): Promise<any>
    read(): Promise<any>
}

export {IPersistence}
