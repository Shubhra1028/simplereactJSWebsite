import React, {Component} from 'react' 

class Faq extends Component{

    state={
        questions: ["How do I pay for my plan?", "Does my plan auto‑renew?", "Can I cancel my plan?", "Can I get an email account?", "What is a premium theme?", "Can I import content from another service?"],
        answers: [
            "You can pay for your brand new WordPress.com plan, add-ons, and domains in the Store checkout using any major credit card, debit card, or PayPal.",
            "Plans and domains renew annually and we take care of everything. We charge your account one month before the end of the subscription period. If your payment information needs updating, we’ll let you know.",
            "Purchases made on WordPress.com can be canceled and refunded during the refund period. You can also unsubscribe at any time if you don’t want your subscription to renew.",
            "On WordPress.com, we provide e-mail forwarding, but if you’d rather have full email hosting, you can connect another provider to your custom domain.",
            "Premium themes are versatile, feature-loaded templates that can support your needs, whether you’ve got a business website or professional portfolio. Choose the Premium or Business plan for unlimited access to hundreds of premium themes.",
            "It is possible to import your blog content from a variety of other blogging platforms, including Medium, Blogger, LiveJournal, Movable Type, Tumblr, Typepad, and more. You can also easily import your content from a self-hosted WordPress site."
        ]
    }

    returnList = ()=>{
        const {questions, answers} = this.state
        return questions.map((item, id)=>{
            return (
            <div key={id}>
                <h4>{item}</h4>
                <p>{answers[id]}</p>
            </div>
            )
        })
    }

    render(){
        return(
                <div className="faq">
                    <h2>You asked, we answered!</h2>
                    <div className="faqGrid">
                        {this.returnList()}
                    </div>
                    <p>Have more questions? Find your answers in our support site.</p>
                </div>
        )
    }
}

export default Faq;