import React from "react";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

const SliderComponent = ({
    defaultValue,
    min,
    max,
    label,
    unit,
    onChange,
    amount,
    value,
    steps
}) => {
    return (
        <Stack gap={1}>
            <Typography variant="subtitle2">{label}</Typography>
            <Typography variant="h5">
                {unit} {amount}
                <Slider
                    min={parseInt(min, 10)}
                    max={parseInt(max, 10)}
                    defaultValue={parseInt(defaultValue, 10)} 
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    onChange={onChange}
                    value={parseInt(value, 10)}
                    marks
                    step={steps}
                />
            </Typography>
            <Stack direction="row" justifyContent="space-between">
                <Typography variant="caption" color="text.secondary">
                    {unit} {min}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    {unit} {max}
                </Typography>
            </Stack>
        </Stack>
    )
}

export default SliderComponent