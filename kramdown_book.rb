require 'kramdown/parser/kramdown'

class Kramdown::Parser::KramdownBook < Kramdown::Parser::Kramdown
   def initialize(source, options)
     super
     @block_parsers.unshift(:code_tag)
   end

   CODE_FROM_FILE = /^<<\((.*)\)/
   def parse_code_tag
      @src.pos += @src.matched_size
      file = @src.matched.strip
      filename = file.match(CODE_FROM_FILE)
      fileext  = File.extname(filename[1])
      fullpath = Dir.pwd + '/manuscript/' + filename[1]
      el = new_block_el(:codeblock, File.read(fullpath))
      if fileext == '.html'
        lang = 'html'
      elsif fileext == '.js'
        lang = 'javascript'
      end
      el.attr['class'] = "language-#{lang}" unless lang.empty?
      @tree.children << el
   end
   define_parser(:code_tag, CODE_FROM_FILE, '<<')
end