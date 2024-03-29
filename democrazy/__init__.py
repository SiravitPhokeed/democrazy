import os
from flask import Flask, render_template


def page_not_found(e):
    return render_template("err-handle/404.html"), 404


def internal_server_error(e):
    return render_template("err-handle/500.html"), 404


def create_app(test_config=None):
    # Create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY="dev",
        DATABASE=os.path.join(app.instance_path, "flaskr.sqlite"),
        TEMPLATES_AUTO_RELOAD=True,
    )

    if test_config is None:
        # Load the instance config, if it exists, when not testing
        app.config.from_pyfile("config.py", silent=True)
    else:
        # Load the test config if passed in
        app.config.from_mapping(test_config)

    # Error handling
    app.register_error_handler(404, page_not_found)
    app.register_error_handler(500, internal_server_error)

    # Ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # Import views
    from . import routes
    app.register_blueprint(routes.bp)

    return app
