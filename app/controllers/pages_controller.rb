class PagesController < ApplicationController
  def index
  end

  def about
  end

  def pricing
  	@pricing = []

  	@pricing << {
  		title: 'Begginer',
  		headline: 'Officia deserunt mollitia',
  		price: 5.49,
  		details: ['At vero eos', 'No Support', 'Fusce condimentum', 'Ut non libero', 'Consecte adiping elit'],
  		footer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna psum olor.'
  	}

  	@pricing << {
  		title: 'Pro',
  		headline: 'Officia deserunt mollitia',
  		price: 11.49,
  		details: ['At vero eos', 'No Support', 'Fusce condimentum', 'Ut non libero', 'Consecte adiping elit'],
  		footer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna psum olor.'
  	}

  	@pricing << {
  		title: 'Expert',
  		headline: 'Officia deserunt mollitia',
  		price: 21.49,
  		details: ['At vero eos', 'No Support', 'Fusce condimentum', 'Ut non libero', 'Consecte adiping elit'],
  		footer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna psum olor.',
  		featured: true
  	}

  	@pricing << {
  		title: 'Hi-Tech',
  		headline: 'Officia deserunt mollitia',
  		price: 21.49,
  		details: ['At vero eos', 'No Support', 'Fusce condimentum', 'Ut non libero', 'Consecte adiping elit'],
  		footer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna psum olor.'
  	}
  end

  def contact
    
  end
end
