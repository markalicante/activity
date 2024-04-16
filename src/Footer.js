function Footer({ items }) {
  let completedItem = items.filter((item) => item.isChecked).length;

  return (
    <div>
      <center>
        <div className="footer">
          <h2>
            You have a total of {items.length} items, you have checked{" "}
            {completedItem} of them.
          </h2>
        </div>
      </center>
    </div>
  );
}

export default Footer;
