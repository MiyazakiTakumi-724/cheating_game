export function sliceAngle(count: number) {
    return 360 / count;
}

export function sliceCenterAngle(index: number, count: number) {
    const angle = sliceAngle(count);
    return angle * index + angle / 2;
}