import React from 'react'

// Sajari components
import {
    Input
} from '@sajari/sdk-react'

const InputSearch = () => {
    return (
        <Input
            mode="typeahead"
            dropdownMode="suggestions"
            styles={{
                container: {
                    width: '100%'
                },
                input: (isFocused) => ({
                    borderRadius: 0,
                    boxShadow: isFocused ? "0 0 0 0.2rem rgba(0,111,245,.25)" : "none",
                    '&:hover': {
                        boxShadow: 'none'
                    },
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: isFocused ? "#76b4ff" : "#ced4da",
                }),
                button: {
                    borderColor: "#adadad",
                    borderWidth: 1,
                    borderStyles: 'solid',
                    borderTopRightRadius: ".3rem",
                    borderBottomRightRadius: ".3rem"
                }
            }}
        />
    )
}

export default InputSearch