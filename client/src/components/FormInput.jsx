import { Form } from "react-bootstrap";

function FormInput({
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    error,
    leftIcon,
    rightElement,
    ...rest
}) {
    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>

            <div className="input-wrapper">
                {leftIcon && <span className="icon-left">{leftIcon}</span>}

                <Form.Control 
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    isInvalid={!!error}
                    {...rest}
                />

                {rightElement && (
                    <div className="icon-right">
                        {rightElement}
                    </div>
                )}
            </div>

            {/* Feedback must be direct sibling of Form.Control for Bootstrap to work */}
            {error && (
                <Form.Control.Feedback type="invalid">
                    {error}
                </Form.Control.Feedback>
            )}
        </Form.Group>
    );
}

export default FormInput;