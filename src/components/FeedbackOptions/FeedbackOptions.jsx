import { OptionsBtn, OptionsBtnWrapper } from './FeedbackOptions.styled.';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <OptionsBtnWrapper>
      {Object.keys(options).map(option => (
        <OptionsBtn
          key={option}
          type="button"
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </OptionsBtn>
      ))}
    </OptionsBtnWrapper>
  );
};
