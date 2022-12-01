type InputAttributesType = {
  value?: string;
  onChange: () => void;
  type: string;
  required: boolean;
  placeholder?: string;
};
/**
 *
 * @param label: string
 * @param onChange: ()=> void
 * @param type string
 * @param required boolean
 * @param placeholder? string
 * @returns
 */
const FormInput = ({
  label,
  inputAttributes,
}: {
  label: string;
  inputAttributes: InputAttributesType;
}) => {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input {...inputAttributes} className="" />
    </div>
  );
};

export default FormInput;
