I18n.config.enforce_available_locales = true

require 'kramdown_book'
require "middleman-core/renderers/kramdown"
Middleman::Renderers::MiddlemanKramdownHTML.middleman_app = self
class Kramdown::Converter::Middleman < ::Middleman::Renderers::MiddlemanKramdownHTML
end

###
# Compass
###

# Change Compass configuration
compass_config do |config|
  config.output_style = :compact
end

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# Proxy pages (http://middlemanapp.com/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

#set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

activate :livereload
activate :automatic_image_sizes
activate :directory_indexes

# Build-specific configuration
configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
end
