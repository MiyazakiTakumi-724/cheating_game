export function sliceAngle(count: number) {
    return 360 / count;
}

export function sliceCenterAngle(index: number, count: number) {
    const angle = sliceAngle(count);
    return angle * index + angle / 2;
}

export function computeRotation(
    currentRotation: number,
    targetIndex: number,
    count: number,
    turns = 5
) {
    const target = -sliceCenterAngle(targetIndex, count);  // 目標マスを真上に持ってくる角度
    const current = currentRotation % 360;                 // 今の向き(360度の余り)
    let delta = (target - current) % 360;
    if (delta < 0) delta += 360;                           // 必ず時計回りに進むよう補正
    return currentRotation + turns * 360 + delta;
}
