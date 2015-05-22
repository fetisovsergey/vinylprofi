Rails.application.routes.draw do
   root  'static_pages#home'
    match '/avtovinyl',   to: 'static_pages#avtovinyl',   via: 'get'
    match '/avtovinyl_prices',   to: 'static_pages#avtovinyl_prices',   via: 'get'
    match '/avtovinyl_works',   to: 'static_pages#avtovinyl_works',   via: 'get'

    match '/bronirovanie_stekol',   to: 'static_pages#bronirovanie_stekol',   via: 'get'

    match '/tonirovka',   to: 'static_pages#tonirovka',   via: 'get'
    match '/tonirovka_prices',   to: 'static_pages#tonirovka_prices',   via: 'get'
    match '/tonirovka_fonarej',   to: 'static_pages#tonirovka_fonarej',   via: 'get'

    match '/udalenie_skolov_na_steklax_avtomobilej',   to: 'static_pages#udalenie_skolov_na_steklax_avtomobilej',   via: 'get'
    match '/antigraviynaya_zashita',   to: 'static_pages#antigraviynaya_zashita',   via: 'get'
    match '/contact',   to: 'static_pages#contact',   via: 'get'
end
