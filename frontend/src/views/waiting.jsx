import { PropagateLoader } from 'react-spinners';

export function Waiting() {
  return (
    <section className='waiting-view'>
      <p className="loader-content">Waiting to your partner</p>
      <div className="loader"><PropagateLoader color="#03ffc3" /></div>
    </section>
  )
}