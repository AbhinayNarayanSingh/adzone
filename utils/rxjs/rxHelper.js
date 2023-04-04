
export const open_dialog = async (type, dialogData, dialogModel) => {
    const { dialogOpenRx } = await import("./rxSubject")
    return dialogOpenRx.next({ type, dialogData, dialogModel })
}

export const close_dialog = async () => {
    const { dialogCloseRx } = await import("./rxSubject")
    return dialogCloseRx.next()
}