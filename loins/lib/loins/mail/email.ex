defmodule Loins.Mail.Email do
  import Bamboo.Email
  import Bamboo.Phoenix

  def links_email do
    base_email()
    |> to("peacethompson2017@gmail.com")
    |> subject("Welcome!!!")
    |> put_header("Reply-To", "ogbemudiaosa@outlook.com")
    |> render("send_links.html", name: "Emmie")
  end

  defp base_email do
    new_email()
    |> from("ogbemudiaosa@outlook.com")
    |> put_html_layout({Loins.LayoutView, "email.html"})
  end
end
