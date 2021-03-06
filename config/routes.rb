# typed: false
# frozen_string_literal: true

Rails.application.routes.draw do
  root "root#index"
  get "/auth/spotify/callback", to: "auth_callback#spotify"
  get "/artists", to: "your_best_of#artists"
  get "/genres", to: "your_best_of_#genres"
  get "/tracks", to: "your_best_of#tracks"
end
