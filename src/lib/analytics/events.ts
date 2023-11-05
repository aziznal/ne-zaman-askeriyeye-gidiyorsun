import { track } from "@vercel/analytics";

export const trackShareEvent = () => {
  track("share");
};

export const trackLocaleChanged = ({
  from,
  to,
}: {
  from: string;
  to: string;
}) => {
  track("locale_changed", {
    from,
    to,
  });
};

export const trackGithubClicked = () => {
  track("github_clicked");
};
