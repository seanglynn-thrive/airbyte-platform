import { useIntl } from "react-intl";

import { theme } from "theme";

import styles from "./icon.module.scss";

interface Props {
  color?: string;
}

export const GAIcon = ({ color = theme.greyColor55 }: Props) => {
  const { formatMessage } = useIntl();
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={styles.icon}
      role="img"
      aria-label={formatMessage({ id: "connector.releaseStage.generallyAvailable.expanded" })}
    >
      <path
        d="M9 0L10.6262 1.87523L12.905 0.89128L13.5565 3.28638L16.0365 3.38859L15.5843 5.82918L17.7744 6.99731L16.308 9L17.7744 11.0027L15.5843 12.1708L16.0365 14.6114L13.5565 14.7136L12.905 17.1087L10.6262 16.1248L9 18L7.37382 16.1248L5.09505 17.1087L4.44354 14.7136L1.96352 14.6114L2.41572 12.1708L0.225649 11.0027L1.692 9L0.225649 6.99731L2.41572 5.82918L1.96352 3.38859L4.44354 3.28638L5.09505 0.89128L7.37382 1.87523L9 0Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.56983 12.3106L4.73486 9.47559L5.63534 8.57511L8.02007 10.9598L12.5855 6.39437L13.486 7.29484L8.4703 12.3106C8.22164 12.5592 7.81849 12.5592 7.56983 12.3106Z"
        fill="white"
      />
    </svg>
  );
};
