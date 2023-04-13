import React from 'react'
import './comment.css'
import faq from '../../components/img/faq.jpg'

export const Komentare = () => {
  return (
    <div className='comment-session'>
      <div className='post-comment'>
        <div className='list'>
          <div className='user'>
            <div className='user-image'><img src={faq} className="faq" alt='faq'/></div>
              <div className='user-meta'>
                <div className='name'>LukasGa12</div>
                <div className='day'>21.12.2012</div>
              </div>
          </div>
          <div className='comment-post'>soadiujhbnfpôouisdhnfoiuhasdofiuhSúODIU</div>
        </div>
      </div>
      <div className='post-comment'>
        <div className='list'>
          <div className='user'>
            <div className='user-image'><img src={faq} className="faq" alt='faq'/></div>
              <div className='user-meta'>
                <div className='name'>LukasGa12</div>
                <div className='day'>21.12.2012</div>
              </div>
          </div>
          <div className='comment-post'>soadiujhbnfpôouisdhnfoiuhasdofiuhSúODIU</div>
        </div>
      </div>
      <div className='post-comment'>
        <div className='list'>
          <div className='user'>
            <div className='user-image'><img src={faq} className="faq" alt='faq'/></div>
              <div className='user-meta'>
                <div className='name'>LukasGa12</div>
                <div className='day'>21.12.2012</div>
              </div>
          </div>
          <div className='comment-post'>soadiujhbnfpôouisdhnfoiuhasdofiuhSúODIU</div>
        </div>
      </div>
      <div className='post-comment'>
        <div className='list'>
          <div className='user'>
            <div className='user-image'><img src={faq} className="faq" alt='faq'/></div>
              <div className='user-meta'>
                <div className='name'>LukasGa12</div>
                <div className='day'>21.12.2012</div>
              </div>
          </div>
          <div className='comment-post'>soadiujhbnfpôouisdhnfoiuhasdofiuhSúODIU</div>
        </div>
      </div>
      <div className='post-comment'>
        <div className='list'>
          <div className='user'>
            <div className='user-image'><img src={faq} className="faq" alt='faq'/></div>
              <div className='user-meta'>
                <div className='name'>LukasGa12</div>
                <div className='day'>21.12.2012</div>
              </div>
          </div>
          <div className='comment-post'>soadiujhbnfpôouisdhnfoiuhasdofiuhSúODIU</div>
        </div>
      </div>
      <div className='comment-box'>
        <div className='user'>
          <div className='image'><img src={faq} className="faq" alt='faq'/></div>
          <div className='name'>LukasGa12</div>
        </div>
      <form action='' method='post'>
        <textarea name='comment' placeholder='Your Massage'></textarea>
        <button className='comment-submit'>Comment</button>
      </form>
      </div>
    </div>
  )
}
