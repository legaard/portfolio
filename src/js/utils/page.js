export const resetPagePosition = (windowRef) => {
    if(windowRef) {
        windowRef.scroll(0, 0);
    } else {
        window.scroll(0, 0);
    }
}