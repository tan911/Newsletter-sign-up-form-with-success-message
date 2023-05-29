import { useState } from 'react';

import SuccessMessage from './components/SuccessMessage';
import Container from './components/Container';

function App() {
  const [isDisplay, setIsDisplay] = useState(false);
  const [emailName, setEmailName] = useState('');

  const displayMessage = (display, email) => {
    if (display) {
      setIsDisplay(true);
      setEmailName(email);
    }
  };

  return (
    <main>
      {!isDisplay && <Container onDisplayMessage={displayMessage} />}
      {isDisplay && <SuccessMessage email={emailName} />}
    </main>
  );
}

export default App;
