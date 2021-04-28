import StepsTitle from './Steps-title';

function showStepsTitles(titles: Array<string>, documentTitle: string) {
  const currentTitlesIndex = titles.findIndex(title => {
    return title === documentTitle;
  });

  return titles.map((title, index) => {
    let itemClassName = 'steps__item_next';

    if (title === documentTitle) itemClassName = 'steps__item_current';
    if (index < currentTitlesIndex) itemClassName = 'steps__item_prev';

    return <StepsTitle 
              key={index}
              title={title}
              itemClassName={itemClassName}
            />
  });
}

export default showStepsTitles;