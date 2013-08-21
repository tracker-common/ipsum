

Using Jasmine Rails for tests. From their docs:

To run from the command line:
RAILS_ENV=test bundle exec rake spec:javascript


To run from browser:
Startup your Rails server (ex: bundle exec rails s), and navigate to the path you have configured in your routes.rb file (ex: http://localhost:3000/specs). The Jasmine spec runner should appear and start running your testsuite instantly.
