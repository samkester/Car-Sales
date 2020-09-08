const TOGGLE_FEATURE = "TOGGLE_FEATURE";

export const toggleFeature = id => {
    return { type: TOGGLE_FEATURE, data: id }
}
