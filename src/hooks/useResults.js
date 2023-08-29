import { useEffect, useState } from 'react';
//import yelp from '../api/yelp';

export default () => {
  var datas = [
    { title: 'In-reach Programme', image_url: '../../assets/event/image-1.jpg', date: 'Tue, 1 Feb 2023, 1:00 PM', event: 'Talk: Get to know', place: 'Sasana Kijang, Bank Negara Malaysia', slot: 'Unlimited Slots' },
    { title: 'In-reach Programme', image_url: '../../assets/event/image-2.jpg', date: 'Wed, 2 Jan 2023, 11:00 PM', event: 'Talk:How old is', place: 'Sasana Kijang, Bank Negara Malaysia', slot: 'Unlimited Slots' },
    { title: 'In-reach Programme', image_url: '../../assets/event/image-3.jpg', date: 'Mon, 21 Feb 2023, 2:00 PM', event: 'Si Kijang Money Box', place: 'Sasana Kijang, Bank Negara Malaysia', slot: 'Unlimited Slots' },
    { title: 'In-reach Programme', image_url: '../../assets/event/image-4.jpg', date: 'Thu, 31 Aug 2023, 5:00 PM', event: 'Talk: Bank Negara', place: 'Sasana Kijang, Bank Negara Malaysia', slot: 'Unlimited Slots' },
    { title: 'In-reach Programme', image_url: '../../assets/event/image-5.jpg', date: 'Fri, 28 Oct 2023, 8:00 PM', event: 'Si Kijang Money Box', place: 'Sasana Kijang, Bank Negara Malaysia', slot: 'Unlimited Slots' },
    { title: 'In-reach Programme', image_url: '../../assets/event/image-6.jpg', date: 'Sun, 5 Sep 2023, 12:00 PM', event: 'Talk:How old is', place: 'Sasana Kijang, Bank Negara Malaysia', slot: 'Unlimited Slots' },
    { title: 'In-reach Programme', image_url: '../../assets/event/image-7.jpg', date: 'Mon, 9 Feb 2023, 1:00 PM', event: 'Talk: Get to know', place: 'Sasana Kijang, Bank Negara Malaysia', slot: 'Unlimited Slots' },
    { title: 'In-reach Programme', image_url: '../../assets/event/image-8.jpg', date: 'Sat, 7 Mar 2023, 12:00 PM', event: 'Si Kijang Money ', place: 'Sasana Kijang, Bank Negara Malaysia', slot: 'Unlimited Slots' },
    { title: 'In-reach Programme', image_url: '../../assets/event/image-9.jpg', date: 'Tue, 8 Apr 2023, 7:00 PM', event: 'Si Kijang Box', place: 'Sasana Kijang, Bank Negara Malaysia', slot: 'Unlimited Slots' },
    { title: 'In-reach Programme', image_url: '../../assets/event/image-10.jpg', date: 'Thu, 11 Jan 2023, 8:00 PM', event: 'Event for 2023', place: 'Sasana Kijang, Bank Negara Malaysia', slot: 'Unlimited Slots' },
  ]
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    try {
      let filteredData = datas.filter(data => String(data.event).includes(searchTerm));
      setResults(filteredData);
      console.log('filteredData', filteredData);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  // Call searchApi when component
  // is first rendered.  BAD CODE!
  // searchApi('Talk:');
  useEffect(() => {
    searchApi('Talk:');
  }, []);

  return [searchApi, results, errorMessage];
};
