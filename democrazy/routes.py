from flask import Blueprint, render_template, flash
from werkzeug.utils import redirect

bp = Blueprint("landing", __name__)

SYSTEMS = {
    "first-past-the-post": {
        "name": "First-past-the-post",
        "code": "first-past-the-post",
        "desc": "There is a high possibilty that your country is using this one. If so, then your country probably has the big 2 \
            parties that everybody hates but votes for anyway, and those small parties that nobody cares about. Not a great system, \
            is it?"
    },
    "limited-voting": {
        "name": "Limited Voting",
        "code": "limited-voting",
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, a. Totam, aliquid nam? Eos, nisi."
    },
}

@bp.route("/")
def index():
    return render_template("index.html")

@bp.route("/explore")
def explore():
    return render_template("explore.html")

@bp.route("/explore/<name>")
def explore_system(name):
    if name not in SYSTEMS:
        flash("We have not implemented that system yet!")
        return redirect("/explore")
    
    return render_template("explore/welcome.html", system=SYSTEMS[name])

@bp.route("/polls")
def polls():
    return render_template("polls.html")